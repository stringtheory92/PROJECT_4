import React from "react";

function CostumeCard({ costume }) {
  const { costume_image, id, name, price } = costume;

  return (
    <>
      <img src={costume_image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
    </>
  );
}

export default CostumeCard;
