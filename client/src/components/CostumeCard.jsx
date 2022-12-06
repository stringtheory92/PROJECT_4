import React from "react";
import { useNavigate } from "react-router-dom";
import { CostumeCardStyled } from "./shared";

function CostumeCard({ costume }) {
  const navigate = useNavigate();
  const { costume_image, id, name, price } = costume;

  const handleClick = () => {
    navigate(`/collection/${id}`);
  };

  return (
    <CostumeCardStyled onClick={handleClick}>
      <img src={costume_image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </CostumeCardStyled>
  );
}

export default CostumeCard;
