import React from "react";
import "./Services.css"; // Import the CSS file for styling

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a wide range of IT security services to protect your business.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 service-item">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {d.subServices && (
                      <ul>
                        {d.subServices.map((subService, index) => (
                          <li key={index}>{subService}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
