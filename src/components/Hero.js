import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h2>{props.t2}</h2>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
          {props.isSignupOpen && ( // Render the close button only if isSignupOpen is true
            <button onClick={props.onCloseClick}>Close</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
