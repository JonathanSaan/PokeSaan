import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4vw;
  background-color: #1B1B1E;
  
  @media screen and (max-width: 768px) {
    padding: 0 1vw;
  }
`;

export const AllPokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1vw 0;
`;

export const OnePokemon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1D1F2B;
  color: #f3f3f3;
  margin: 1vw auto;
  height: 26vw;
  width: 20vw;
  
  h1 {
    margin: auto;
    text-transform: uppercase;
    font-size: 2vw;
    font-weight: 700;
  }
  
  &:hover {
    transition: 300ms;
    transform: scale(0.96);
  }
  
  &:active {
    border: 1px solid #f3f3f3;
    transition: 300ms;
  }
  
  @media screen and (max-width: 768px) {
    height: 57vw;
    width: 47vw;
    
    h1 {
      font-size: 5vw;
    }
  }
`;


export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20vw;
  
  @media screen and (max-width: 768px) {
    min-height: 40vw;
  }
`;