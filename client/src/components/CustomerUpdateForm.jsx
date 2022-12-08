import React, { useState } from "react";

function CustomerUpdateForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password_confirmation: "",
  });

  const handleUpdateCustomer = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleUpdateCustomer}>
      <label htmlFor="name">New name:</label>
      <input type="text" name="name" id="" />
      <label htmlFor="password">New password:</label>
      <input type="text" name="password" id="" />
      <label htmlFor="password_confirmation">Confirm password:</label>
      <input type="text" name="password_confirmation" id="" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerUpdateForm;
