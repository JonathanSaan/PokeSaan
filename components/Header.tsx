import { useState } from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { Container, Search, Title } from "../styles/header";

export const Header = () => {
  const [TypedSearch, SetTypedSearch] = useState<string>("");
  
  const SearchPokemon = (e: ChangeEvent<unknown>) => {
    if (TypedSearch === "") {
      return e;
    };
    
    e.preventDefault();
    SetTypedSearch(TypedSearch);
    //navigate(`/search/${TypedSearch.replaceAll(" ", "+")}`);
  };
  
  return (
    <Container>
      <Link href="/">
        <Title>PokeSaan</Title>
      </Link>
      <Search onSubmit={SearchPokemon}>
        <input 
          id="icon-input"
          placeholder="Search..." 
          type="text"
          value={TypedSearch} 
          onChange={(e) => SetTypedSearch(e.target.value)}
        />
        <label htmlFor="icon-input">
          <BiSearch size={25} />
        </label>
      </Search>
    </Container>
  );
};