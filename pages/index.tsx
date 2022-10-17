import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Header } from "../components/Header";
import { ListPokemons } from "../components/ListPokemons";
import { Container } from "../styles/home";
import { Footer } from "../components/Footer";

interface Props {
  pokemons: string;
  LoadPokemons(): void;
}

const Home: NextPage = ({ pokemons, LoadPokemons }: Props) => {
  return (
    <div>
      <Head>
        <title>PokeSaan</title>
        <meta name="description" content="A website about pokemons made by JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <ListPokemons pokemons={pokemons} LoadPokemons={LoadPokemons} />
      </Container>
      <Footer />
    </div>
  );
};

export default Home