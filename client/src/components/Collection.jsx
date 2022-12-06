import React, { useState, useEffect } from "react";
import CostumeCard from "./CostumeCard";
import collection_bg from "../bgs/collection_bg.jpg";

function Collection() {
  const [collection, setCollection] = useState([]);
  const displayedCostumes = collection.map((costume) => (
    <CostumeCard key={costume.id} costume={costume} />
  ));

  useEffect(() => {
    fetch("/costumes")
      .then((r) => r.json())
      .then(setCollection);
  }, []);

  console.log("collection: ", collection);

  const pageStyles = {
    padding: "3rem",
    backgroundImage: `url(${collection_bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };

  const cardGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5rem",
  };
  const headerStyles = {
    fontFamily: "'Zen Dots', cursive",
    fontSize: "4rem",
    color: "var(--golden)",
    // color: "var(--white)",
    textShadow: "4px 4px 5px #333",
  };

  return (
    <div style={pageStyles}>
      <h1 style={headerStyles}>Collection</h1>
      <div style={cardGridStyles}>{displayedCostumes}</div>
    </div>
  );
}

export default Collection;
