// https://www.tvstoreonline.com/collections/rick-and-morty

import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Collection from "./components/Collection";
import CostumeCardPage from "./components/CostumeCardPage";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: rgb(206, 209, 219);
    --golden: rgb(245, 212, 64);
    --red: rgb(209, 30, 6);
    --blue: rgb(52, 91, 235);
    --black: #333;
  }

* {
  box-sizing: border-box;
  color: var(--black);
}

`;

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [hasAcct, setHasAcct] = useState(true);

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

  const toggleHasAcct = () => {
    setHasAcct((status) => !status);
  };
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
              <Login
                replace
                to={"/login"}
                onSignIn={onSignIn}
                hasAcct={hasAcct}
                toggleHasAcct={toggleHasAcct}
              />
            )
          }
        />
        <Route path="/collection" element={<Collection />} />
        <Route
          path="/collection/:id"
          element={
            customer ? <CostumeCardPage customer={customer} /> : "Loading"
          }
        />
      </Routes>
    </div>
  );
}

export default App;
