import React, { useState } from "react"; // Import useState
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Contact.css";
import axios from "axios";

function Contact() {
  const [data, setData] = useState({
    username: "",
    phonenumber: "",
    message: "",
  });
  const { username, phonenumber, message } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://wheelsforentals-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("Submitted Successfully we will contact you shortly"))
      .catch((error) => console.error("Error:", error));

    console.log("Submitted Data:", data);
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://www.cloud4c.com/vn/sites/vn/files/2022-07/cloud4c-company-contact-1Desktop.jpg"
        title="Contact"
        btnClass="hide"
      />
      <h1>Contact us</h1>
      <div className="contact-section">
        <div className="contact-info">
          <div>
            <i className="fas fa-map-marker-alt"></i>Srikakulam , Andhra Pradesh
          </div>
          <div>
            <i className="fas fa-envelope"></i>Wheelsforrentals@gmail.com
          </div>
          <div>
            <i className="fas fa-phone"></i>+91 9154344743
          </div>
          <div>
            <i className="fas fa-clock"></i>8:00 AM to 9:00 PM
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>

          <form className="contact" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className="text-box"
              placeholder="Your Name"
              value={username}
              onChange={changeHandler}
              required
            />
            <input
              type="phonenumber"
              name="phonenumber"
              className="text-box"
              placeholder="Your phone number"
              value={phonenumber}
              onChange={changeHandler}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what wheel you want"
              value={message}
              onChange={changeHandler}
              required
            ></textarea>
            <input
              type="submit"
              name="submit"
              className="send-btn"
              value="Send"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
