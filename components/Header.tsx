import { useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { Container, Search, Title } from "../styles/header";

export const Header = () => {
  
  return (
    <Container>
      <Link href="/">
        <Title>PokeSaan</Title>
      </Link>
      <Search>
        <input placeholder='Search...' type="text"/>
        <span>
          <BiSearch size={25} />
        </span>
      </Search>
    </Container>
  );
};