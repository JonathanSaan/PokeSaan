import { useRouter } from "next/router";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Data, Title, Type } from "../../styles/pokemon";

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

const PokemonDetail: NextPage = ({ pokemons }: Props) => {
  console.log(pokemons)
  
  return (
    <>
      <Head>
        <title>{pokemons.name}</title>
        <meta name="description" content="the details about pokemon" />
        <meta charset="UTF-8" />
        <meta name="keywords" content="pokemon details" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemons.id}.png`} alt={pokemons.name} />
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
                  {pokemons.types.map(type => (
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