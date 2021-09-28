import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, bg, clr, Wd, Pd }) => {
  return (
    <Container>
      <Button background={bg} color={clr} width={Wd} padding={Pd}>
        {text}
      </Button>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div``;

const Button = styled.button`
  outline: none;
  border: 0;
  border-radius: 5px;
  padding: ${({ padding }) => (padding ? "2px 4px" : "15px 30px")};
  width: ${({ width }) => (width ? "100px" : "200px")};
  background: ${({ background }) => (background ? "#ecc700" : "#007bff")};
  color: ${({ color }) => (color ? "black" : "white")};
  margin: 10px;
  transform: scale(1);
  :hover {
    background: ${({ background }) => (background ? "#fcff03" : "#4c7bb5")};
    transition: all 350ms;
    transform: scale(1.05);
    cursor: pointer;
  }
`;