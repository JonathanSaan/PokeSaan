import styled from "styled-components";
import { Pagination } from "@mui/material";

export const Container = styled.div`
  padding: 0 4vw;
  min-height: 100vh;
  
  @media screen and (max-width: 768px) {
    padding: 0 1vw;
  }
`;

export const AllPokemons = styled.div`
  display: flex;
  min-height: 30vh;
  flex-wrap: wrap;
  margin: .5em 0 .7em 0;
`;

export const OnePokemon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1D1F2B;
  color: #f3f3f3;
  margin: 1vw auto;
  height: 23vw;
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
  margin: 3vw auto auto;
  height: 13vw;
  width: 17vw;
  
  @media screen and (max-width: 768px) {
    height: 33vw;
    width: 30vw;
    margin: auto;
  }
`;

export const PaginationStyled = styled(Pagination)`
  display: flex;
  margin: 1em 0;
  color: #f3f3f3!important;
  justify-content: center;
`;