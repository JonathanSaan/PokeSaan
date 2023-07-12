import { useState, useRef, useEffect } from "react";
import type { NextPage, GetStaticProps} from "next";
import Head from "next/head";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { PokemonList } from "../components/PokemonList";
import { Loading } from "../components/Loading";
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
      <Header />
      <Container>
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePokemon}
          hasMore={true}
          loader={<Loading/>}
        >
          <PokemonList pokemons={posts} />
        </InfiniteScroll>
      </Container>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25`);
  
  response.data.results.forEach((item: Pokemon, index: number) => {
    item.id = index + 1;
  });
  
  return {
    props: {
      pokemons: response.data.results,
    },
  };
};

export default Home;
