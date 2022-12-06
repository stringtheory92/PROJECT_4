import React from "react";
import styled from "styled-components";

const CostumeCardStyled = styled.div`
  width: 100%;
  padding: 2rem;
  height: 20rem;
  background: linear-gradient(
    180deg,
    #ff0055 0%,
    #333 0%,
    rgba(255, 255, 255, 0) 0%,
    #333 73%,
    #000066 100%
  );
  border-radius: 30px;
  box-shadow: 4px 4px 10px #333;
  color: rgb(206, 209, 219);
  > img {
    border: 1px solid lightgray;
    /* width: 100%; */
    height: 10rem;
  }
  > h2 {
    font-size: 1.2rem;
  }
`;

export { CostumeCardStyled };
