import React from "react";
import styled from "styled-components";

const NavBarStyled = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  > .links {
    display: flex;
    align-items: center;
  }
  > .links > .link {
    width: 12rem;
    height: 100%;
  }
`;

export { NavBarStyled };
