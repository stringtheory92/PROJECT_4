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

  return (
    <>
      <div>Collection</div>
      {displayedCostumes}
    </>
  );
}

export default Collection;
