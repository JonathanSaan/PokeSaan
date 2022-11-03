import { useState, useEffect } from "react";
import type { NextPage, GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { Container, PaginationStyled } from "../styles/home";
import { Footer } from "../components/Footer";

type Props = {
  pokemons: string[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  /*const [pokemons, setPokemons] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const response = await axios.get(`/pokemon?limit=26&offset=${currentPage}`);*/
  
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
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(500);
  
  const handlePagination = (
    event: ChangeEvent<unknown>,
    value: number,
  ) => {
    setTotalPage(value);
  };
  
  useEffect(() => {
  }, [page]);
  
  
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
        <PaginationStyled
          color="primary"
          shape="rounded"
          defaultPage={page}
          count={Math.ceil(totalPage / 20)}
          onChange={handlePagination}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Home