import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import { AllPokemons, OnePokemon, StyleImage } from "../styles/home";

interface Props {
  pokemons: string;
}

export const ListPokemons = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <AllPokemons>
      {pokemons.map((pokemon) => (
        <>
          <Link key={pokemon.id} href={`pokemon/${pokemon.name}`}>
            <OnePokemon>
              <StyleImage>
                <Image
                  src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name} 
                  height="130%"
                  width="130%"
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