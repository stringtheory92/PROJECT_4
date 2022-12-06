// https://www.tvstoreonline.com/collections/rick-and-morty

import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
<<<<<<< HEAD
import Cart from "./components/Cart";
=======
import Collection from "./components/Collection";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;

}

`;
>>>>>>> origin

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((customer) => {
          console.log("customer: ", customer);
          setCustomer(customer);
          // setIsLoggedIn(true);
        });
      } else {
        console.log("no one logged in");
      }
    });
  }, []);
  // const toggleLogIn = () => {
  //   if (isLoggedIn) {
  //     navigate("/");
  //   }
  //   setIsLoggedIn((status) => !status);
  // };

  const onSignIn = (customer) => {
    console.log("customer: ", customer);
    setCustomer(customer);
    // toggleLogIn();
  };
  const onLogout = () => {
    setCustomer(null);
    navigate("/");
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar onLogout={onLogout} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            customer ? (
              <Home />
            ) : (
              <Login replace to={"/login"} onSignIn={onSignIn} />
            )
          }
        />
<<<<<<< HEAD
        {customer ? <Route
        path="/cart"
        element={<Cart customer={customer}/>}
        /> : null}
=======
        <Route path="/collection" element={<Collection />} />
>>>>>>> origin
      </Routes>
    </div>
  );
}

export default App;
