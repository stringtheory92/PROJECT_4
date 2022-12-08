import React, { useState } from "react";
import CustomerUpdateForm from "./CustomerUpdateForm";
import flash from "../bgs/fat-flash.webp";
import hulk from "../bgs/fat-hulk.webp";
import spiderman1 from "../bgs/fat-spiderman.jpg";
import spiderman2 from "../bgs/fat-spiderman2.jpg";
import spiderman3 from "../bgs/fat-spiderman3.jpg";
import superman from "../bgs/fat-superman.jpg";
import wolverine from "../bgs/fat-wolverine.jpeg";
import wonderWoman from "../bgs/fat-wonder-woman.jpeg";
import bg from "../bgs/comics_bg.jpg";

function Home({ customer }) {
  const [isUpdatingCustomer, setIsUpdatingCustomer] = useState(false);

  const handleUpdateStateToggle = (e) => {
    setIsUpdatingCustomer((status) => !status);
  };
  const backgroundStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "stretch",
    paddingTop: "2rem",
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(4, 1fr)",
    zIndex: "2",
  };
  const foregroundStyles = {
    zIndex: "3",
    position: "absolute",
    top: "6rem",
    left: "0",
    height: "100vh",
    width: "100vw",
  };
  const headingStyles = {
    color: "var(--white)",
    textShadow: "2px 4px 0px #333",
    fontStyle: "italic",
    fontSize: "4rem",
  };
  const imageDivStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };
  const imageStyles = {
    maxHeight: "100%",
    maxWidth: "100%",
    border: "2px solid #444",
  };
  return (
    <>
      <div className="backgroundGrid" style={backgroundStyles}>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={spiderman1} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={spiderman2} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={spiderman3} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={flash} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={hulk} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={superman} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={wolverine} alt="" className="image" style={imageStyles} />
        </div>
        <div className="imageDiv" style={imageDivStyles}>
          <img src={wonderWoman} alt="" className="image" style={imageStyles} />
        </div>
      </div>
      <div style={foregroundStyles}>
        <h1 style={headingStyles}>
          Costumes with{" "}
          <span
            style={{
              fontFamily: "Zen Dots, cursive",
              color: "var(--golden)",
              webkitTextStroke: "1px var(--black)",
              fontSize: "7rem",
            }}
          >
            Class
          </span>
        </h1>
        {isUpdatingCustomer ? (
          <CustomerUpdateForm customer={customer} />
        ) : (
          <button onClick={handleUpdateStateToggle}>Update Information</button>
        )}
      </div>
    </>
  );
}

export default Home;
