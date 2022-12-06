import React from "react";
import { CostumeCardStyled } from "./shared";

function CostumeCard({ costume }) {
  const { costume_image, id, name, price } = costume;

  return (
    <CostumeCardStyled>
      <img src={costume_image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </CostumeCardStyled>
  );
}

export default CostumeCard;
