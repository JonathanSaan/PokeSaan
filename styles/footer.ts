import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 5em;
  width: 100%;
  background-color: #1d1f2b;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1em;
    }
  }
`;

export default Container;
