import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((customer) => {
          console.log("customer: ", customer);
          setCustomer(customer);
          // setIsLoggedIn(true);
        });
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
    setCustomer(customer);
    // toggleLogIn();
  };
  const onLogout = () => {
    setCustomer(null);
  };

  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
