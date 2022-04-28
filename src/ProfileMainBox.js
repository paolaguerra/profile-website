import React from "react";
import "./index.css";
import picture from "./img/profile-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebookF,
  faLinkedin,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

export const ProfileMainBox = (props) => {
  return (
    <div className="ProfileMainBox">
      <div className="seccion-A">
        <img className="profile" alt="profile-picture" src={picture}></img>
        <div className="profile-text-A">
          <div className="titles">
            <h1 className="profile-name">Se-ri Yoon</h1>
            <h2 className="profile-price">$44/hr</h2>
            <div class="v-line"></div>
          </div>
          <p className="profile-title">Full Stack web developer</p>
          <p className="profile-work">
            <FontAwesomeIcon icon={faBuilding} /> Epic Coders
          </p>
          <button className="contact-button">contact</button>
          <button className="Resume-button">Resume</button>
        </div>
      </div>

      <div className="seccion-B">
        <div className="profile-text-B">
          <p className="description-profile">
            Availavility: <p className="data-profile">{props.avail}</p>
            <div className="availavility-on-off">Available</div>
          </p>
          <p className="description-profile">
            Age: <p className="data-profile">{props.age}</p>
          </p>
          <p className="description-profile">
            Location: <p className="data-profile">{props.locat}</p>
          </p>
          <p className="description-profile">
            Years Experience:<p className="data-profile">{props.exp}</p>
          </p>
          <ul className="social-icons">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faBehance} />
          </ul>
        </div>
      </div>
    </div>
  );
};

ProfileMainBox.propTypes = {
  avail: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  locat: PropTypes.string.isRequired,
  exp: PropTypes.string.isRequired,
};
