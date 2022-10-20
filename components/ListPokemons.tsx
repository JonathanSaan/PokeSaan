import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { AllPokemons, OnePokemon } from "../styles/home";


export const ListPokemons = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <AllPokemons>
      {pokemons.map((pokemon) => (
        <>
          <Link key={pokemon.id} href={`pokemon/${pokemon.name}`}>
            <OnePokemon>
              <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
              <h1>{pokemon.name}</h1>
            </OnePokemon>
          </Link>
        </>
      ))}
    </AllPokemons>
  );
};