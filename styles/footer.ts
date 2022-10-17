import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 5em;
  width: 100%;
  background-color: #1D1F2B;
  justify-content: center;
  align-items: center;
  
  h1 {
    color: #FFF;
    font-size: 1.5em;
  }
  
  @media(max-width: 768px) {
    h1 {
      font-size: 1em;
    }
  }
`;