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
        <input id="icon-input" placeholder="Search..." type="text" />
        <label htmlFor="icon-input">
          <BiSearch size={25} />
        </label>
      </Search>
    </Container>
  );
};