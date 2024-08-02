import React, { useState } from 'react';
import "./Ssignuppopup.css";
import axios from "axios";

const SignupPopup = ({ onClose }) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://wheelsforentals-default-rtdb.firebaseio.com/login.json', data)
      .then(() => alert("signup success"))
      .catch((error) => alert(`Error: ${error.message}`));

    // Close the popup after form submission
    onClose();
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
  
    // Send a GET request to fetch the signup data
    axios.get('https://wheelsforentals-default-rtdb.firebaseio.com/login.json')
      .then((response) => {
        const signupData = response.data; // Assuming the signup data is stored in Firebase
  
        // Check if the login credentials (e.g., email and password) match any signup data
        const { email, password } = data;
  
        for (const key in signupData) {
          const user = signupData[key];
          if (user.email === email && user.password === password) {
            // Login successful
            alert("Login successful");
            onClose(); // Close the popup
            return; // Exit the loop since we found a matching user
          }
        }
  
        // If no matching user was found
        alert("Login failed. Please check your credentials.");
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };
  
  
  

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={changeHandler}
            placeholder="Username"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="Password"
            required
          /><div>
          <button onClick={handleLoginClick}>Login</button>
        </div>
          <button type="submit">Sign Up</button>
        </form>
        
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupPopup;
