import React from "react";
import flash from "../bgs/fat-flash.webp";
import hulk from "../bgs/fat-hulk.webp";
import spiderman1 from "../bgs/fat-spiderman.jpg";
import spiderman2 from "../bgs/fat-spiderman2.jpg";
import spiderman3 from "../bgs/fat-spiderman3.jpg";
import superman from "../bgs/fat-superman.jpg";
import wolverine from "../bgs/fat-wolverine.jpeg";
import wonderWoman from "../bgs/fat-wonder-woman.jpeg";

function Home() {
  const backgroundStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    height: "100vw",
    zIndex: "static",
  };
  const foregroundStyles = {
    zIndex: "2",
    position: "absolute",
    top: "6rem",
    left: "0",
    height: "100vh",
    width: "100vw",
  };
  return (
    <>
      <div className="backgroundGrid" style={backgroundStyles}>
        <div className="imageDiv">
          <img src={spiderman1} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={spiderman2} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={spiderman3} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={flash} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={hulk} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={superman} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={wolverine} alt="" className="image" />
        </div>
        <div className="imageDiv">
          <img src={wonderWoman} alt="" className="image" />
        </div>
      </div>
      <div style={foregroundStyles}>
        <h1>ForeGround Foreground</h1>
      </div>
    </>
  );
}

export default Home;
