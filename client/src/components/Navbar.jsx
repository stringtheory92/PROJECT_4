import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AddToFavoritesButton,
  NavBarStyled,
  NavLinksStyled,
  CartButtonStyled,
} from "./shared";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

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

  const cartBtnStyles = {
    padding: "0.6rem 1.5rem",
  };

  return (
    <NavBarStyled>
      <div className="links">
        <div className="link">
          <NavLinksStyled as={NavLink} to="/">
            Home
          </NavLinksStyled>
        </div>
        <div className="link">
          <NavLinksStyled as={NavLink} to="/collection">
            Collection
          </NavLinksStyled>
        </div>
        {/* <div className="link">
          <NavLinksStyled as={NavLink} to="/collection">
            Collection
          </NavLinksStyled>
        </div> */}
      </div>
      <div className="buttons">
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
        {customer ? (
          <div>
            <CartButtonStyled
              as={NavLink}
              to={`/carts/${customer.cart.id}`}
              style={cartBtnStyles}
            >
              Cart
            </CartButtonStyled>
            <AddToFavoritesButton onClick={handleLogout}>
              Log Out
            </AddToFavoritesButton>
          </div>
        ) : (
          <div>
            <AddToFavoritesButton onClick={handleToLogin}>
              Please Log In
            </AddToFavoritesButton>
          </div>
        )}
      </div>
    </NavBarStyled>
  );
}

export default Navbar;
