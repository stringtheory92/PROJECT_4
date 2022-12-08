import React from "react";
import styled from "styled-components";

const AddToFavoritesButton = styled.button`
  height: 3rem;
  width: 11rem;
  /* padding: 0.5rem, 0.8rem; */
  margin: 1rem;
  color: var(--white);
  font-size: 1rem;

  font-weight: bold;
  background-color: rgb(222, 71, 60);
  border: none;
  outline: none;
  border-radius: 15px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(224, 151, 146);
  }
  &:active {
    background-color: rgb(133, 40, 33);
  }
`;

export { AddToFavoritesButton };

// active: rgb(133, 40, 33)
