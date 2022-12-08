import React, { useState } from "react";

function CustomerUpdateForm({ customer }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password_confirmation: "",
  });

  const handleUpdateCustomer = (e) => {
    e.preventDefault();

    fetch(`/customers/${customer.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then(console.log);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleUpdateCustomer}>
      <label htmlFor="name">New name:</label>
      <input type="text" name="name" id="" onChange={handleChange} />
      <label htmlFor="password">New password:</label>
      <input type="text" name="password" id="" onChange={handleChange} />
      <label htmlFor="password_confirmation">Confirm password:</label>
      <input
        type="text"
        name="password_confirmation"
        id=""
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerUpdateForm;
