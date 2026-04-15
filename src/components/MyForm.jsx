import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validate form
  const validate = () => {
    let temp = {};
    if (!formData.name) temp.name = "Name is required";
    if (!formData.email) temp.email = "Email is required";
    if (!formData.password) temp.password = "Password is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h2>React Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.name}</p>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.email}</p>
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.password}</p>
        </div>

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#646cff", color: "white", border: "none", borderRadius: "4px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;