import { useState, useEffect, ChangeEvent } from "react";
import { SearchForm, SearchInput } from "../styles/home";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

interface Props {
  setPosts: (value: Pokemon[]) => void;
  pokemons: Pokemon[];
  setHasMorePokemons: (value: boolean) => void;
}

const Search = (props: Props) => {
  const { setPosts, pokemons, setHasMorePokemons } = props;

  const [typedSearch, setTypedSearch] = useState<string>("");

  useEffect(() => {
    const lowerSearch = typedSearch.trim().toLowerCase();
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(lowerSearch)
    );
    setHasMorePokemons(filteredPokemons.length > 10);
    setPosts(filteredPokemons);
  }, [typedSearch, pokemons, setPosts, setHasMorePokemons]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setTypedSearch(name);
  };

  return (
    <SearchForm>
      <SearchInput
        type="text"
        value={typedSearch === " " ? "" : typedSearch}
        placeholder="Search"
        onChange={handleInputChange}
      />
    </SearchForm>
  );
};

export default Search;
