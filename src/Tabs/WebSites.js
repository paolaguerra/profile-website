import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEarthAmericas,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

export const WebSites = () => {
  return (
    <div className="websites">
      <h2 className="websites-h2">WEBSITES</h2>
      <p className="links-websites">
        <FontAwesomeIcon icon={faEarthAmericas} /> &nbsp;Website
      </p>
      <p className="links-websites">
        <FontAwesomeIcon icon={faNoteSticky} /> &nbsp;Blog
      </p>
      <p className="links-websites">
        <FontAwesomeIcon icon={faBriefcase} /> &nbsp;Portfolio
      </p>
    </div>
  );
};
