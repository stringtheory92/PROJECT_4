import React, { useState } from "react";
import { useEffect } from "react";
import { LoginPageStyled, AddToCartButton } from "./shared";
import closet_bg from "../bgs/closet_bg.jpg";

function Login({ onSignIn, hasAcct, toggleHasAcct }) {
  const [testLoginName, setTestLoginName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [newAcctForm, setNewAcctForm] = useState({
    name: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("/first_customer")
      .then((r) => r.json())
      .then((customer) => setTestLoginName(customer.name));
  }, []);

  console.log("hasAcct: ", hasAcct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (hasAcct) setFormData({ ...formData, [name]: value });
    else setNewAcctForm({ ...newAcctForm, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { name, password } = formData;

    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(onSignIn);
      } else {
        r.json().then(setErrors);
      }
    });
  };

  const handleCreateAcctSubmit = (e) => {
    e.preventDefault();
    const { name, password, passwordConfirmation } = newAcctForm;

    fetch(`/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onSignIn);
  };

  const bgStyles = {
    backgroundImage: `url(${closet_bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <LoginPageStyled style={bgStyles}>
      <div className="formContainerContainer">
        {hasAcct ? (
          <div className="formContainer">
            <form action="" onSubmit={handleLoginSubmit} className="wholeForm">
              <h2>{`Test Name: ${testLoginName}`}</h2>
              <h2>{`Test Password: GucciMane`}</h2>
              <div className="userName labelInputDiv topLabel">
                <label htmlFor="name">User Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="password labelInputDiv">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id=""
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <AddToCartButton type="submit">Sign in</AddToCartButton>
              {errors ? <p>{errors.error}</p> : null}
            </form>
            <button onClick={toggleHasAcct} className={"accountSwitchBtn"}>
              Don't have an account?
            </button>
          </div>
        ) : (
          <div className="formContainer">
            <form
              action=""
              onSubmit={handleCreateAcctSubmit}
              className="wholeForm"
            >
              <div className="userName labelInputDiv topLabel">
                <label htmlFor="name">User Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={newAcctForm.name}
                  onChange={handleChange}
                />
              </div>
              <div className="userName labelInputDiv">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  id=""
                  value={newAcctForm.password}
                  onChange={handleChange}
                />
              </div>
              <div className="userName labelInputDiv">
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input
                  type="text"
                  name="passwordConfirmation"
                  id=""
                  value={newAcctForm.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
              <AddToCartButton type="submit">Create Account</AddToCartButton>
            </form>
            <button onClick={toggleHasAcct} className={"accountSwitchBtn"}>
              Have an account?
            </button>
          </div>
        )}
      </div>
    </LoginPageStyled>
  );
}

export default Login;
