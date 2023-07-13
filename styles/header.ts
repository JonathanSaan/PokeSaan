import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  padding: 0 2vw;
  height: 5em;
  width: 100%;
  background-color: #1d1f2b;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 4vw;
  }
`;

export const Title = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
`;
