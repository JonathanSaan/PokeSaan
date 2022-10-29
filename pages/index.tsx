import type { NextPage, GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { Container } from "../styles/home";
import { Footer } from "../components/Footer";

type Props = {
  pokemons: string[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  //const maxPokemons: number = 251;
  const maxPokemons: number = 28;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);
  
  response.data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });
  
  return {
    props: {
      pokemons: response.data.results,
    },
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;
  
const Home: NextPage<HomeProps> = ({ pokemons }) => {
  
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
        <PokemonList
          pokemons={pokemons}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Home