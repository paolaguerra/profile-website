import React from "react";
import "./index.css";
import picture from "./img/profile-picture.jpg";

export const ProfileMainBox = () => {
  return (
    <div className="ProfileMainBox">
      <div className="seccion-A">
        <img className="profile" alt="profile-picture" src={picture}></img>
        <div className="profile-text">
          <h1 className="profile-name">Se-ri Yoon</h1>
          <p className="profile-title">Full Stack web developer</p>
          <button className="contact-button">contact</button>
          <button className="Resume-button">Resume</button>
        </div>
      </div>
    </div>
  );
};
