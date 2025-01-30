import React from "react";
import "./Header.css"; // Import the CSS file for styling

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  VIRA SECURITY
                  <span></span>
                </h1>
                <p>{props.data ? props.data.title : "Loading"}</p>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#services" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
