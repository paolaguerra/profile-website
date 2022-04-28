import React from "react";
import atom from "../img/atom.png";

export const RightColumn = () => {
  return (
    <div className="right-column">
        <img className="atom" alt="atom-icon" src={atom}></img>
        <h2 className="sign-up">Track time on Hubstaff</h2>
        <p className="text-sign-up">Pay only for the hours worked</p>
        <button className="button-signup">Sign Up</button>
        <button className="learn-more">Learn More...</button>
    </div>
  );
};


