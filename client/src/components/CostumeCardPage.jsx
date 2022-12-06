import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AddToCartButton,
  AddToFavoritesButton,
  CostumeCardPageStyled,
} from "./shared";

function CostumeCardPage() {
  const [costume, setCostume] = useState({});
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    fetch(`/costumes/${id}`)
      .then((r) => r.json())
      .then(setCostume);
  }, []);
  console.log("costume: ", costume);

  const handleAddToFavorites = (e) => {};

  return (
    <div>
      {costume ? (
        <CostumeCardPageStyled>
          <div className="mainContainer">
            <div className="imageContainer">
              <img src={costume.costume_image} alt="" />
            </div>
            <div className="infoSection">
              <h2>{costume.name}</h2>
              <div className="text">
                <p>Description Text Here</p>
              </div>
              <p>
                Normal Price:{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                    fontWeight: "600",
                    fontStyle: "italic",
                  }}
                >
                  ${(costume.price * 1.25).toFixed(2)}
                </span>
              </p>
              <p
                style={{
                  fontSize: "2rem",
                  color: "rgb(52, 91, 235)",
                  fontWeight: "800",
                }}
              >
                <span>NOW</span> for ${costume.price.toFixed(2)}
              </p>
              <div className="buttons">
                <AddToCartButton>Add To Cart</AddToCartButton>
                <AddToFavoritesButton onClick={handleAddToFavorites}>
                  Add To Favorites
                </AddToFavoritesButton>
              </div>
            </div>
          </div>
        </CostumeCardPageStyled>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default CostumeCardPage;
