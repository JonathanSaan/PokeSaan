import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 6rem 0;
  min-height: 100vh;

  h2 {
    font-size: 3rem;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 5rem 0;
  }
`;
