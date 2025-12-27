import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting
import "./FormPage.css"

function FormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: ""
  });

  const navigate = useNavigate(); // Initialize navigate for redirect

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation or processing here
    console.log("Form data submitted: ", formData);

    // After form submission, redirect to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="container">
      <h1>Shipping Information</h1>
      <p>Please enter your shipping details.</p>
      <hr />
      <form onSubmit={handleSubmit} className="form">
        <div className="fields fields--2">
          <label className="field">
            <span className="field__label" htmlFor="firstname">First name</span>
            <input
              className="field__input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="lastname">Last name</span>
            <input
              className="field__input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="field">
          <span className="field__label" htmlFor="phone">Phone</span>
          <input
            className="field__input"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field">
          <span className="field__label" htmlFor="email">Email ID</span>
          <input
            className="field__input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field">
          <span className="field__label" htmlFor="country">Country</span>
          <select
            className="field__input"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="unitedstates">India</option>
          </select>
        </label>

        <div className="fields fields--3">
          <label className="field">
            <span className="field__label" htmlFor="state">State</span>
            <input 
              className="field__input" 
              type="text" 
              id="state" 
              name="state"
              onChange={handleChange} 
            />

          </label>

          <label className="field">
            <span className="field__label" htmlFor="city">City</span>
            <input
              className="field__input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field">
            <span className="field__label" htmlFor="zipcode">Zip code</span>
            <input
              className="field__input"
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="field">
          <span className="field__label" htmlFor="address">Address</span>
          <input
            className="field__input"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <hr />
        <button className="button" type="submit">
          Proceed to Checkout
        </button>
      </form>
    </div>
  );
}

export default FormPage;
