import React, { useState } from "react";
import { Profile } from "./Profile";
import { Resume } from "./Resume";

export const TabContainer = () => {
  const [tabSeleccionado, setTabSeleccionado] = useState("Profile");

  const handleClickProfile = () => {
    setTabSeleccionado("Profile");
  };

  const handleClickResume = () => {
    setTabSeleccionado("Resume");
  };

  let btnProfileCSSClass = 'btn';
  if (tabSeleccionado === "Profile") {
      btnProfileCSSClass = 'btn btn-selected';
  } 

  let btnResumeCSSClass = 'btn';
  if (tabSeleccionado === "Resume") {
    btnResumeCSSClass = 'btn btn-selected';
}

  return (
    <div>
      <div className="btn-1-2">
        <button className={btnProfileCSSClass} onClick={handleClickProfile}>
          Profile
        </button>

        <button className={btnResumeCSSClass} onClick={handleClickResume}>
          CV/Resume
        </button>
        <div className="h-line"></div>
      </div>

      {tabSeleccionado === "Profile" && (
        <div>
          <Profile></Profile>
        </div>
      )}
      {tabSeleccionado === "Resume" && (
      <div>
          <Resume></Resume>
      </div>
      )}
    </div>
  );
};
