import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 5em;
  width: 100%;
  background-color: #1d1f2b;
  justify-content: center;
  align-items: center;
  
  h1 {
    color: #fff;
    font-size: 1.5em;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1em;
    }
  }
`;

export default Container;
