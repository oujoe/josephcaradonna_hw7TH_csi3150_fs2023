import logo from "./logo.svg";
import "./App.css";
import React, {
  useState,
  useEffect,
  formData,
  handleChange,
  handleSubmit,
} from "react";

function App() {
  // create form info full name, username, email, address, phone #
  const [formData, setFormData] = React.useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // handleChange function modified from lecture
  function handleChange(e) {
    const { name, value, type } = e.target;
    // write the data members that store the values of the form inputs
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  // form submission function modified from lecture
  function handleSubmit(e) {
    // use state getter and access most up to date value to send it where it is needed
    // if you do not want form field to reset when submit is clicked, must override reset behavior
    e.preventDefault();

    console.log(formData);
  }

  // return form to html page
  return (
    <div className="App">
      <div className="appForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullNameInput">Enter your Full Name:</label>
          <input
            className="textInput"
            id="fullName"
            type="text"
            placeholder="ex: Jane Doe"
            name="fullName"
            defaultValue={formData.fullName}
            onChange={handleChange}
          />
          <label htmlFor="usernameInput">Enter your desired username:</label>
          <input
            className="textInput"
            id="username"
            type="text"
            placeholder="ex: JaneDoe123"
            name="username"
            defaultValue={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="emailInput">Enter your email:</label>
          <input
            className="textInput"
            id="email"
            type="email"
            placeholder="ex: JaneDoe@gmail.com"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="addressInput">Enter your address:</label>
          <input
            className="textInput"
            id="address"
            type="text"
            placeholder="ex: 12345 Fake St, Rochester, MI 12345"
            name="address"
            defaultValue={formData.address}
            onChange={handleChange}
          />
          <label htmlFor="phoneNumberInput">Enter your phone number:</label>
          <input
            className="textInput"
            id="phoneNumber"
            type="text"
            placeholder="ex: 586-123-4567"
            name="phoneNumber"
            defaultValue={formData.phoneNumber}
            onChange={handleChange}
          />
          <input type="submit" value="Submit Form" onChange={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default App;
