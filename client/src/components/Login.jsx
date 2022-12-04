import React, { useState } from "react";

function Login({ onSignIn }) {
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

    // fetch("");
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
