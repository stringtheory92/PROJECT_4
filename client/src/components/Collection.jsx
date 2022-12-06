import React, { useState, useEffect } from "react";
import CostumeCard from "./CostumeCard";

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
  };

  const cardGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5rem",
  };

  return (
    <div style={pageStyles}>
      <h1>Collection</h1>
      <div style={cardGridStyles}>{displayedCostumes}</div>
    </div>
  );
}

export default Collection;
