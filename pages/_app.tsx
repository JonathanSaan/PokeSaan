import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "../styles/global";


function MyApp({ Component, pageProps }: AppProps) {
  /*const [ pokemons, setPokemons ] = useState<string>([]);
  
  const LoadPokemons = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`);
    setPokemons(response.data.results);
  };*/
  
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;