import React from "react";
import styled from "styled-components";

const NavLinksStyled = styled.div`
  text-decoration: none;
  font-size: 1.3rem;
  font-family: Zen Dots, cursive;
  color: var(--black);
  transition: color 0.2s, font-size 0.3s, text-shadow 0.3s;

  &:hover {
    color: var(--golden);
    -webkit-text-stroke: 1px var(--black);
    /* font-weight: 900; */
    font-size: 2rem;
    text-shadow: 10px 10px 2px var(--black);
    /* text-shadow: 3px 3px 2px var(--black); */
  }
  &:active {
    color: var(--golden-active);
    font-size: 1.8rem;
  }
`;

export { NavLinksStyled };
