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
      <p>
        <span className="only">${(price * 1.25).toFixed(2)}</span> $
        {price.toFixed(2)}
        {/* <span className="only">Only</span> ${price.toFixed(2)} */}
      </p>
    </CostumeCardStyled>
  );
}

export default CostumeCard;
