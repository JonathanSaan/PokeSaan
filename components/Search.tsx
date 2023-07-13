import { useState, ChangeEvent } from "react";
import { SearchForm, SearchInput } from "../styles/home";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

interface Props {
  setPosts: (value: Pokemon[]) => void;
  pokemons: Pokemon[];
}

const Search = (props: Props) => {
  const { setPosts, pokemons } = props;

  const [typedSearch, setTypedSearch] = useState<string>("");

  const searchPokemon = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setTypedSearch(name);

    const lowerSearch = typedSearch.toLowerCase();
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(lowerSearch)
    );

    setPosts(filteredPokemons);
  };

  return (
    <SearchForm>
      <SearchInput
        type="text"
        value={typedSearch}
        placeholder="Search"
        onChange={searchPokemon}
      />
    </SearchForm>
  );
};

export default Search;
