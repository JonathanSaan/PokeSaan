import { useState, useRef, useEffect } from "react";
import type { NextPage, GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { Loading } from "../components/Loading";
import { Container, PaginationStyled } from "../styles/home";
import { Footer } from "../components/Footer";

type Props = {
  pokemons: string[];
}

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;
  
const Home: NextPage<HomeProps> = ({ pokemons }) => {
  const [posts, setPosts] = useState<string[]>([]);
  const offset = useRef<number>(0);
  
  const getMorePokemon = async () => {
    const newPokemon: any = [];
    const regex = /\/(\d+)\//;
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset.current}&limit=24`).then(({ data }) => {
      data.results.forEach((p: any, index: number) => {
        const id = p.url.match(regex)[1];
        p.id = (id);
        newPokemon.push(p);
      });
      setPosts((oldPokemon) => [...oldPokemon, ...newPokemon]);
    });
    offset.current += 24;
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
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=24`);
  
  response.data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });
  
  return {
    props: {
      pokemons: response.data.results,
    },
  };
};

export default Home