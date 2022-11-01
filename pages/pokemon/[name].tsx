import { useRouter } from "next/router";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, StyleImage, Data, Title, Type } from "../../styles/pokemon";

type Props = {
  pokemons:  {
    name: string;
    id: number;
    height: number;
    weight: number;
    types: {
      slot: number;
      type: {
        name: string;
      };
    }[]
  };
}


export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 251;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}`);
  
  const paths = response.data.results.map((pokemon: any) => {
    return {
      params: { name: pokemon.name },
    }
  })
  
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context: any) => {
  const name = context.params.name
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  
  return {
    props: { pokemons: response.data },
  }
}

type IType = {
  slot: number;
  type: {
    name: string;
  };
}

const PokemonDetail: NextPage<Props> = ({ pokemons }: Props) => {
  
  return (
    <>
      <Head>
        <title>{pokemons.name}</title>
        <meta name="description" content="the details about pokemon" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="pokemon details" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <StyleImage>
          <Image 
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemons.id}.png`} 
            alt={pokemons.name}
            height="300%"
            width="430%"
          />
        </StyleImage>
        <Data>
          <Title>
            {pokemons.name}
          </Title>
          <table>
            <tr>
              <td>Height:</td>
              <td>{pokemons.height} cm</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>{pokemons.weight} kg</td>
            </tr>
            <tr>
              <td>Types:</td>
              <td>
                <Type>
                  {pokemons.types.map(( type: IType ) => (
                    <td key={type.slot}>{type.type.name}</td>
                  ))}
                </Type>
              </td>
            </tr>
          </table>
        </Data>
      </Container>
      <Footer />
    </>
  );
};

export default PokemonDetail