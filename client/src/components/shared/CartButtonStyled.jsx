import React from "react";
import styled from "styled-components";

const CartButtonStyled = styled.button`
  margin: 1rem;
  color: var(--black);
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  /* background-color: rgb(222, 71, 60); */
  border: 2px solid var(--black);
  /* outline: none; */
  border-radius: 10px;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background-color: rgb(240, 240, 240);
    color: gray;
    border-color: gray;
  }
  &:active {
    background-color: var(--black);
    color: var(--white);
    border-color: var(--black);
  }
`;

export { CartButtonStyled };
