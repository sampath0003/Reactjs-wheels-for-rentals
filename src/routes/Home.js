import React ,{useState} from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/aboutimg.jpg";
import Wheels from "../components/Wheels";
import Trip from "../components/trip";
import Footer from "../components/Footer";
import './Home.css';

function Home(){

  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupOpen(false);
    
  };
    return(
        <>
        <Navbar/>
          <Hero
          cName="hero"
          heroImg={aboutimg}
          title="Your Trip Our Wheels"
          text="Choose a wonderful wheel"
          buttonText="Book Wheel"
          url="/Service"
          btnClass="show"
          onButtonClick={handleSignupClick}
          onCloseClick={closeSignupModal}
          />
          <Wheels/>
          <Trip/>
          <Footer/>
        </>
    ); 
}
export default Home;