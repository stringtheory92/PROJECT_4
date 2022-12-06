import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ onLogout }) {
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  };

  return (
    <div>
      <NavLink to={"./cart"}>Cart</NavLink>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Navbar;
