import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AddToCartButton,
  AddToFavoritesButton,
  CostumeCardPageStyled,
} from "./shared";

function CostumeCardPage({ customer }) {
  const [costume, setCostume] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);
  const [reRenderToggle, setReRenderToggle] = useState(false);
  const [favoriteResponse, setFavoriteResponse] = useState("");
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    if (!costume) {
      fetch(`/costumes/${id}`)
        .then((r) => r.json())
        .then((costume) => {
          setCostume(costume);
          console.log("in useEffect");
          changeFavoriteState(costume);
        });
    }
  }, [isFavorited]);

  console.log("costume: ", costume);
  console.log("customer: ", customer);
  console.log("isFavorited: ", isFavorited);

  async function changeFavoriteState(costume) {
    console.log("in changeFavoriteState");
    const status =
      (await customer.favorites.filter((fav) => {
        console.log("fav.costume_id: ", fav.costume_id);
        console.log("costume.id: ", costume.id);
        return fav.customer_id === customer.id && fav.costume_id === costume.id;
      }).length) > 0;
    console.log("status: ", status);
    if (status) setIsFavorited(status);
  }

  //   useEffect(() => {
  //     if (!isFavorited && costume) {
  //       console.log("not favorited");
  //       const status =
  //         customer?.favorites.filter((fav) => {
  //           return (
  //             fav.customer_id === customer.id && fav.costume_id === costume.id
  //           );
  //         }).length === 0;
  //       setIsFavorited(status);
  //     }
  //   }, [reRenderToggle]);

  const handleAddToFavorites = (e) => {
    fetch("/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customer.id,
        costume_id: costume.id,
      }),
    })
      .then((r) => r.json())
      .then((newFav) => {
        console.log(newFav);
        setReRenderToggle((status) => !status);
      });
  };

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
                {isFavorited ? (
                  <AddToFavoritesButton
                    style={{ backgroundColor: "rgb(224, 151, 146)" }}
                  >
                    Favorited
                  </AddToFavoritesButton>
                ) : (
                  <AddToFavoritesButton onClick={handleAddToFavorites}>
                    Add To Favorites
                  </AddToFavoritesButton>
                )}
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
