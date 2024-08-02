import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image1 from "../assets/image1.jpg";
import stress from "../assets/stress.jpeg"
import Footer from "../components/Footer";
import "./About.css";
import pic1 from "../assets/pic1.jpg";


function About(){
    return(
        <>
        <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={image1}
          btnClass="hide"
          title="Love where you're going"
        
          />
        <div className="info">
          <h1>About us</h1>
          <p>Providing Vehciles for rentals</p>
          <p1>We’re on a journey to transform ordinary trips into extraordinary ones. 
            We are your guide, bringing you personal experiences. Wherever your travels 
            take you, we’ll show you the unique and unmissable things to do in your destination. 
            With GetYourGuide on your side (and in your pocket), creating memorable moments has never been easier. 
            Today, millions have used GetYourGuide to turn their travel dreams into reality. And we’re just getting started. 
            We're changing the way people connect to the places they visit so anyone can create their dream vacation. It’s your journey, your way.
          </p1>
          <div>
          </div>
        <div className="pic">
         <img alt="pic" src={pic1}/>
        </div>
          <div className="more">
            <h1>
            Travel made easy
            </h1>
            <p>Say goodbye to stress</p>
            <p1>Browse and book, and we’ll tell you when to be where. You can just focus on having a great time.</p1>
            <div className="pic">
                    <img alt="pic" src={stress}/>
                    

                </div>
                <div className="down">
                  <h1>Made for Travelers</h1>
                  <p>"Absolutely amazing! This was one of the most incredible experiences I have ever had. It was perfectly timed and well organized."</p>
                  <p>- we are here to make your trip easy</p>
                </div>
          </div>
        </div> 
        <Footer/>
  
        </>


    )

}
export default About;