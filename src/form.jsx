import React, { useState } from "react";

const PatientRegistration = () => {
  const [formData, setFormData] = useState({
    Patient_name: "",
    age:"",
    Gender:"",
    Patient_Type: ""

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
    if (!formData.gender) temp.age = "age is required";
    if(!formData.Patient_Type) temp.Password = "Password is required";
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
      <h2>Patient Registration</h2>
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
            type="radio"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.email}</p>
        </div>

        <label for="Patinet_type" >Patient_Type</label>
        <div>
          <input
            type="Text"
            name="Password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="">Select Patient_Type</option>
            <option value="Disease">Disease</option>
            <option value="Cancer">Cancer</option>
            <option value="Injury">Injury</option>
            <option value="virus">Virus</option>
            </input>
          <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>{errors.password}</p>
        </div>

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#646cff", color: "white", border: "none", borderRadius: "4px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientRegistration;