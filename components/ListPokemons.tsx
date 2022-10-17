import { useState, useEffect } from "react";
import Link from "next/link";
import { AllPokemons, OnePokemon } from "../styles/home";

interface Props {
  pokemons: string;
  LoadPokemons(): void;
}

export const ListPokemons = ({ pokemons, LoadPokemons }: Props) => {
  useEffect(() => { 
    LoadPokemons();
  }, [] );
  
  return (
    <AllPokemons>
      {pokemons.map((pokemon) => (
        <>
          <Link key={pokemon.name} href={`pokemon/${pokemon.name}`}>
            <OnePokemon>
              <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={pokemon.name} />
              <h1>{pokemon.name}</h1>
            </OnePokemon>
          </Link>
        </>
      ))}
    </AllPokemons>
  );
};