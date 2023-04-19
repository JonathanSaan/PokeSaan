import Link from "next/link";
import Image from "next/image";
import { AllPokemons, OnePokemon, StyleImage } from "../styles/home";

interface Props {
  pokemons:
    | {
        name: string;
        id: number;
      }[]
    | string[];
}

export const PokemonList = (props: Props) => {
  const { pokemons } = props;

  return (
    <AllPokemons>
      {pokemons.map((pokemon: any) => (
        <>
          <Link key={pokemon.id} href={`pokemon/${pokemon.name}`}>
            <OnePokemon>
              <StyleImage>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                  objectFit="contain"
                  loading="lazy"
                  height="150%"
                  width="200%"
                />
              </StyleImage>
              <h1>{pokemon.name}</h1>
            </OnePokemon>
          </Link>
        </>
      ))}
    </AllPokemons>
  );
};
