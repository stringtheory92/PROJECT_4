import React from "react";
import { useParams } from "react-router-dom";

function CostumeCardPage() {
  const params = useParams();
  console.log("params: ", params);
  return <div>CostumeCardPage</div>;
}

export default CostumeCardPage;
