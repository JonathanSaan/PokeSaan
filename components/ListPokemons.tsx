import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { AllPokemons, OnePokemon } from "../styles/home";


export const ListPokemons = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(pokemons)
  
  return (
    <AllPokemons>
      {pokemons.map((pokemon, index) => (
        <>
          <Link key={index} href={`pokemon/${pokemon.name}`}>
            <OnePokemon>
              <img src={`https://cdn.traction.one/pokedex/pokemon/${index}.png`} alt={pokemon.name} />
              <h1>{pokemon.name}</h1>
            </OnePokemon>
          </Link>
        </>
      ))}
    </AllPokemons>
  );
};