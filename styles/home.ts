import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4vw;
  background-color: #fefefe;
  
  @media screen and (max-width: 768px) {
    padding: 0 2vw;
  }
`;

export const AllPokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fefefe;
  padding: .5em 0;
`;

export const OnePokemon = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1em;
  margin: 2vw auto;
  height: 36vw;
  width: 30vw;
  
  img {
    margin: auto;
    height: 29vw;
    width: 29vw;
  }
  
  h1 {
    margin: auto;
    text-transform: uppercase;
    font-size: 3vw;
    font-weight: 700;
  }
  
  &:hover {
    transition: 300ms;
    transform: scale(0.96);
  }
  
  &:active {
    border: 1px solid #000;
    transition: 300ms;
  }
  
  @media screen and (max-width: 768px) {
    height: 57vw;
    width: 47vw;
    
    img {
      height: 43vw;
      width: 43vw;
    }
    
    h1 {
      font-size: 5vw;
    }
  }
`;
