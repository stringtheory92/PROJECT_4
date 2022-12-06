import React from "react";
import styled from "styled-components";

const CostumeCardPageStyled = styled.div`
  > .mainContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  > .mainContainer > .imageContainer {
    padding: 2rem;
  }
  > .mainContainer > .imageContainer > img {
    max-width: 100%;
    max-height: 100%;
  }
  > .mainContainer > .infoSection {
    border: 1px solid lightgray;
  }
  > .mainContainer > .infoSection > .text {
    min-height: 20rem;
  }
`;

export { CostumeCardPageStyled };
