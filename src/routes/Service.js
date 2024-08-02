import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "./Service.css";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://imgr2.auto-motor-und-sport.de/Mazda-6-verschiedene-Modelle-Gruppenbild-fotoshowBig-5eff6315-512732.jpg"
        t2="Service"
        btnClass="hide"
      />
      <h1>Our Services</h1>
      <div className="menu">
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              // Wrap each MenuItem in a Link to the contact page
              <Link to="/contact" key={key}>
                <MenuItem
                  image={menuItem.image}
                  name={menuItem.name}
                  price={menuItem.price}
                  time={menuItem.time}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Service;
