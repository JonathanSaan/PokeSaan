import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4vw 0;
  min-height: 100vh;
  justify-content: center;
  background-color: #1B1B1E;
  
  img {
    height: 40vw;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 40vh;
    padding: 5vw 1vw;
    justify-content: flex-start;
    flex-direction: column;
    
    img {
      margin: 0 auto;
      height: 90vw;
      width: 90vw;
    }
  }
`;

export const Data = styled.div`
  margin: 0 0 0 3vw;
  height: 10em;
  
  @media screen and (max-width: 768px) {
    margin: 3em auto 0 auto;
    width: 90vw;
  }
`;

export const Title = styled.h1`
  color: #f3f3f3;
  height: 1em;
  text-transform: uppercase;
  text-align: center;
  font-size: 3vw;
  font-weight: 700;
  
  @media screen and (max-width: 768px) {
    font-size: 6vw;
  }
`;