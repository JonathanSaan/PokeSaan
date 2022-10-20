import { useRouter } from "next/router";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";

//import { Header } from "../../components/Header";
type Props = {
  pokemons: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);
  
  const paths = response.data.results.map((pokemon) => {
    return {
      params: { name: pokemon.name },
    }
  })
  
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const name = context.params.name
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  
  return {
    props: { pokemons: response.data },
  }
}

const PokemonDetail: NextPage = async ({ pokemons }: Props) => {
  
  return (
    <>
      <Head>
        <title>Pokemon - </title>
        <meta name="description" content="pokemon" />
        <meta charset="UTF-8" />
        <meta name="keywords" content="pokemon" />
        <meta name="author" content="JonathanSaan" />
      </Head>
      <div>
        <h1>
          Pokemon
        </h1>
      </div>
    </>
  );
};

export default PokemonDetail