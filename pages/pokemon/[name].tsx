import { useRouter } from "next/router";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

//import { Header } from "../../components/Header";
interface Props {
  pokemons: string;
}

export const PokemonDetail = async ({ pokemons }: Props) => {
  const router = useRouter();
  const { name } = router.query;
  
  return (
    <>
      <Head>
        <title>Pokemon - {name}</title>
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