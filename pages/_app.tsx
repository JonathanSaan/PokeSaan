import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyle from "../styles/global";


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;