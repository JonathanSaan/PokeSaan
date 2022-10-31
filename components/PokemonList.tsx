import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import { AllPokemons, OnePokemon, StyleImage } from "../styles/home";

interface Props {
  pokemons:
    | 
      {
        name: string;
        id: number;
      }[]
    | 
    string[];
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
                  src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name} 
                  height="130%"
                  width="150%"
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