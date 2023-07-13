
import Link from "next/link";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container } from "../styles/404";

const ErrorPage = () => {
  
  return (
    <div>
      <Head>
        <title>404 page - PokeSaan</title>
        <meta name="description" content="A website about pokemons made by JonathanSaan" />
        <meta name="keywords" content="pokemons" />
        <meta charSet="UTF-8" />
        <meta name="author" content="JonathanSaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <h2>Page not found.</h2>
        <Footer />
      </Container>
    </div>
  );
};



export default ErrorPage;
