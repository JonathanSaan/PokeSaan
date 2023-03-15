import Link from "next/link";
import { Container, Title } from "../styles/header";

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Title>PokeSaan</Title>
      </Link>
    </Container>
  );
};