import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 4vw;
  height: 5em;
  width: 100%;
  background-color: #1D1F2B;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  
  input[type=text] {
    position: relative;
    padding: .6em 1.3em .6em 1.3em;
    margin: 0 0 0 auto;
    width: 2em;
    color: #525252;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 100;
    letter-spacing: 2px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(to right, #FFFFFF 0%,#464747 #F9F9F9 100%);
    transition: width 0.4s ease;
    outline: none;
    
    &:focus { 
      width: 50vw;
    }
    
    @media(min-width: 768px) {
      &:focus { 
        width: 20em;
      }
    }
  }
  
  span {
    position: relative;
    margin: 0 .5em -.1em -2em;
    color: #1D1F2B;
  }
}
`;

export const Title = styled.a`
  text-decoration: none;
  color: #FFF;
  font-size: 1.5em;
  font-weight: 700;
`;