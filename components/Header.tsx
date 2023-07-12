import Link from "next/link";
import { Container, Title } from "../styles/header";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Title>PokeSaan</Title>
      </Link>
    </Container>
  );
};

export default Header;