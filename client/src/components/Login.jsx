import React, { useState } from "react";

function Login({ onSignIn }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id=""
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="password"></label>
        <input
          type="text"
          name="password"
          id=""
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Login;
