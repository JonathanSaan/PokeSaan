import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4vw 0;
  min-height: 100vh;
  justify-content: center;
  background-color: #1B1B1E;
  
  @media screen and (max-width: 768px) {
    min-height: 40vh;
    padding: 5vw 1vw 7vw 1vw;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const StyleImage = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
  height: 30vw;
  width: 50vw;
  
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    height: 70vw;
    width: 80vw;
  }
`;

export const Data = styled.div`
  margin: 0 0 0 3vw;
  min-height: 13em;
  width: 35vw;
  
  table {
    margin: 2em auto 0 auto;
    width: 65%;
   
    tr {
      height: 2em;
      color: #f3f3f3;
    }
  }
  
  @media screen and (max-width: 768px) {
    margin: 3em auto 0 auto;
    width: 90vw;
    
    table {
      margin: 10vw auto 0 auto;
      width: 60%;
      
      tr {
        font-size: 4vw;
      }
    }
  }
`;

export const Title = styled.h1`
  color: #f3f3f3;
  text-transform: uppercase;
  text-align: center;
  font-size: 4vw;
  font-weight: 700;
  
  @media screen and (max-width: 768px) {
    font-size: 7vw;
  }
`;

export const Type = styled.tr`
  flex-direction: column;
  mad-height: 2em;
  max-width: 4em;
  
  td {
    display: inline-block;
    background-color: #1D1F2B;
    text-transform: uppercase;
    text-align: center;
    margin: .1em;
    padding: .5em;
    min-width: 4em;
    border-radius: .5em;
  }
`;