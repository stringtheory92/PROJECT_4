import React, { useState } from "react";
import { useEffect } from "react";

function Login({ onSignIn }) {
  const [testLoginName, setTestLoginName] = useState("");
  const [hasAcct, setHasAcct] = useState(true);
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

  const toggleHasAcct = () => {
    setHasAcct((status) => !status);
  };

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

  return (
    <div>
      {hasAcct ? (
        <form action="" onSubmit={handleLoginSubmit}>
          <h2>{`Test Name: ${testLoginName}`}</h2>
          <h2>{`Test Password: GucciMane`}</h2>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id=""
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign in</button>
          <button onClick={toggleHasAcct}>Don't have an account?</button>
          {errors ? <p>{errors.error}</p> : null}
        </form>
      ) : (
        <form action="" onSubmit={handleCreateAcctSubmit}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={newAcctForm.name}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id=""
            value={newAcctForm.password}
            onChange={handleChange}
          />
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            type="text"
            name="passwordConfirmation"
            id=""
            value={newAcctForm.passwordConfirmation}
            onChange={handleChange}
          />
          <button type="submit">Create Account</button>
          <button onClick={toggleHasAcct}>Have an account?</button>
        </form>
      )}
    </div>
  );
}

export default Login;
