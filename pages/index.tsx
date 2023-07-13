import { useState, useRef, useEffect } from "react";
import type { NextPage, GetStaticProps} from "next";
import Head from "next/head";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../components/Header";
import Search from "../components/Search";
import PokemonList from "../components/PokemonList";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { Container } from "../styles/home";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

type Props = {
  pokemons: Pokemon[];
};

type HomeProps = Props;

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  const [posts, setPosts] = useState<Pokemon[]>([]);
  const hasMorePokemons = useRef(true);
  const offset = useRef<number>(0);

  const getMorePokemon = async () => {
    const newPokemon: Pokemon[] = [];
    const regex = /\/(\d+)\//;
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset.current}&limit=25`);

    data.results.forEach((p: Pokemon) => {
      const matchResult = p.url.match(regex);
      if (matchResult) {
        const id = matchResult[1];
        const updatedPokemon: Pokemon = {
          ...p,
          id: Number(id),
        };
        newPokemon.push(updatedPokemon);
      }
    });

    setPosts((oldPokemon) => [...oldPokemon, ...newPokemon]);
    offset.current += 25;
  };

  useEffect(() => {
    getMorePokemon();
  }, []);
  
  return (
    <div>
      <Head>
        <title>PokeSaan</title>
        <meta name="description" content="A website about pokemons made by JonathanSaan" />
        <meta name="keywords" content="pokemons" />
        <meta charSet="UTF-8" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePokemon}
          hasMore={hasMorePokemons.current}
          loader={<Loading/>}
        >
          <Search setPosts={setPosts} pokemons={pokemons} />
          <PokemonList pokemons={posts} />
        </InfiniteScroll>
        <Footer />
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25`);

  const pokemons: Pokemon[] = response.data.results.map((item: Pokemon, index: number) => ({
    ...item,
    id: index + 1,
  }));

  return {
    props: {
      pokemons,
    },
  };
};


export default Home;
