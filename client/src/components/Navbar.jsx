import React from "react";

function Navbar({ onLogout }) {
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Navbar;
