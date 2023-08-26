import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, StyleImage, Data, Title, Type } from "../../styles/pokemon";

interface Type {
  slot: number;
  type: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: Type[];
}

interface Props {
  pokemon: Pokemon;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);

  const paths = response.data.results.map((pokemon: Pokemon) => {
    return {
      params: { name: pokemon.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const name = context.params?.name as string;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  const pokemon: Pokemon = {
    name: response.data.name,
    id: response.data.id,
    height: response.data.height,
    weight: response.data.weight,
    types: response.data.types,
  };

  return {
    props: { pokemon },
  };
};

const DetailPokemon: NextPage<Props> = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>{pokemon.name ? `${pokemon.name} - ` : ""}PokeSaan</title>
        <meta name="description" content="the details about pokemon" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="pokemon details" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <StyleImage>
          <Image
            src={pokemon.id ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png` : ""}
            alt={pokemon.name ? pokemon.name : "details about pokemon"}
            objectFit="contain"
            height="300%"
            width="430%"
          />
        </StyleImage>
        <Data>
          <Title>{pokemon.name}</Title>
          <table>
            <tbody>
              <tr>
                <td>Height:</td>
                <td>{pokemon.height / 10} m</td>
              </tr>
              <tr>
                <td>Weight:</td>
                <td>{pokemon.weight / 10} kg</td>
              </tr>
              <tr>
                <td>Types:</td>
                <td>
                  <Type>
                    {pokemon.types.map((type) => (
                      <span key={type.slot}>{type.type.name}</span>
                    ))}
                  </Type>
                </td>
              </tr>
            </tbody>
          </table>
        </Data>
        <Footer />
      </Container>
    </>
  );
};

export default DetailPokemon;
