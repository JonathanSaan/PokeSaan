import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Header } from "../components/Header";
import { Container } from "../styles/home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PokeSaan</title>
        <meta name="description" content="A website about pokemons made by JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
      </Container>
    </div>
  )
}

export default Home
