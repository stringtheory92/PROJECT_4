import React from "react";
import styled from "styled-components";

const AddToCartButton = styled.button`
  height: 3rem;
  width: 9rem;
  /* padding: 0.5rem, 0.8rem; */
  margin: 1rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
  background-color: rgb(52, 91, 235);
  border: none;
  outline: none;
  border-radius: 15px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(109, 136, 232);
  }
  &:active {
    background-color: rgb(22, 45, 128);
  }
`;

export { AddToCartButton };
