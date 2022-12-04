import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customer, setCustomer] = useState({});

  const toggleLogIn = () => {
    if (isLoggedIn) {
      navigate("/");
    }
    setIsLoggedIn((status) => !status);
  };

  const onSignIn = (customer) => {
    setCustomer(customer);
    toggleLogIn();
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <Login replace to={"/login"} onSignIn={onSignIn} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
