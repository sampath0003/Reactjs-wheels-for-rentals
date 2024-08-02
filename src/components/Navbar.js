import React, { Component, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import SignupPopup from "../routes/SignupPopup"; // Import the SignupPopup component
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false, isSignupOpen: false }; // Add isSignupOpen state

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleSignupClick = () => {
    this.setState({ isSignupOpen: true });
  };

  closeSignupModal = () => {
    this.setState({ isSignupOpen: false });
  };

  render() {
    return (
      <>
        {this.state.isSignupOpen && (
          <>
            <div className="blur-background" /> {/* Blur effect */}
            <div className="popup-container">
              <SignupPopup onClose={this.closeSignupModal} />
            </div>
          </>
        )}
        <nav className="NavbarItems">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          <div
            className="menu-icons"
            onClick={this.handleClick}
            style={{ color: "red" }}
          >
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.tittle}
                  </Link>
                </li>
              );
            })}
            <li>
              <button className="signup-button" onClick={this.handleSignupClick}>
                Signup/Login
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
