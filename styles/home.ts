import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 5rem 0 6rem 0;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 5rem 0;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vw auto 2.5vw auto;
  width: 60vw;
  
  @media screen and (max-width: 768px) {
    margin: 5vw auto 5.5vw auto;
    width: 75vw;
  }
`;

export const SearchInput = styled.input`
  border-radius: .5rem;
  border: none;
  outline: none;
  padding: 0 0 0 1rem;
  height: 3rem;
  width: 100%;
`;

export const AllPokemons = styled.div`
  display: flex;
  min-height: 20vh;
  flex-wrap: wrap;
  padding: 0 4vw 0 5vw;
  margin: 0 auto .7em auto;

  @media screen and (max-width: 768px) {
    padding: 0 4vw;
    width: 100%;
  }
`;

export const OnePokemon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1d1f2b;
  cursor: pointer;
  color: #f3f3f3;
  margin: 0 .5vw 1vw .5vw;
  height: 19vw;
  width: 17vw;

  h1 {
    margin: auto auto 2.5vw auto;
    text-transform: uppercase;
    font-size: 1.5vw;
    font-weight: 700;
  }

  &:hover {
    transition: 300ms;
    transform: scale(.96);
  }

  &:active {
    border: 1px solid #f3f3f3;
    transition: 300ms;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto 5vw auto;
    height: 52vw;
    width: 42vw;

    h1 {
      margin: auto;
      font-size: 5vw;
    }
  }
`;

export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  color: transparent;
  margin: 3vw auto auto;
  height: 20vw;
  width: 16vw;

  img {
    pointer-events: none;
  }
  
  @media screen and (max-width: 768px) {
    height: 39vw;
    width: 30vw;
  }
`;
