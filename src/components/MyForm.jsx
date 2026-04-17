import React, { useState } from "react";

const librarystore = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age:"",
    Password: ""

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
    if (!formData.name) temp.name = "name is required";
    if (!formData.email) temp.email = "email is required";
    if (!formData.age) temp.age = "age is required";
    if(!formData.Password) temp.Password = "Password is required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(" Details Filled Successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h2>Library Store</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <div>
          <input
            type="text"
            name="Name"
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
            name="Email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.email}</p>
        </div>

        <div>
          <input
            type="Number"
            name="Age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.age}</p>
        </div>

        <div>
          <input
            type="Text"
            name="Password"
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

export default librarystore;