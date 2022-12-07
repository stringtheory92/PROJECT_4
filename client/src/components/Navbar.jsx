import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AddToFavoritesButton } from "./shared";
import { NavBarStyled, NavLinksStyled } from "./shared";

function Navbar({ onLogout, customer }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  };
  const handleToLogin = () => {
    console.log("clicked");
    navigate("/");
  };

  return (
    <NavBarStyled>
      <div className="links">
        <div className="link">
          <NavLinksStyled as={NavLink} to="/collection">
            Collection
          </NavLinksStyled>
        </div>
        <div className="link">
          <NavLinksStyled as={NavLink} to="/collection">
            Collection
          </NavLinksStyled>
        </div>
        <div className="link">
          <NavLinksStyled as={NavLink} to="/collection">
            Collection
          </NavLinksStyled>
        </div>
      </div>
      <div className="buttons">
        {customer ? (
          <AddToFavoritesButton onClick={handleLogout}>
            logout
          </AddToFavoritesButton>
        ) : (
          <AddToFavoritesButton onClick={handleToLogin}>
            Please Log In
          </AddToFavoritesButton>
        )}
      </div>
    </NavBarStyled>
  );
}

export default Navbar;
