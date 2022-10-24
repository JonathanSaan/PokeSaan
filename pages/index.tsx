import type { NextPage, GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import { Header } from "../components/Header";
import { ListPokemons } from "../components/ListPokemons";
import { Container } from "../styles/home";
import { Footer } from "../components/Footer";

type Props = {
  pokemons: string;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  //const maxPokemons = 251;
  const maxPokemons = 24;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);
  
  response.data.results.forEach((item, index) => {
    item.id = index + 1;
  });
  
  return {
    props: {
      pokemons: response.data.results,
    },
  };
};

const Home: NextPage = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <div>
      <Head>
        <title>PokeSaan</title>
        <meta name="description" content="A website about pokemons made by JonathanSaan" />
        <meta name="keywords" content="pokemons" />
        <meta charset="UTF-8" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <ListPokemons pokemons={pokemons} />
      </Container>
      <Footer />
    </div>
  );
};

export default Home