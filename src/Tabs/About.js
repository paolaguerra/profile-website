import React from "react";
import usa from "../img/usa.png";
import germany from "../img/germany.png";
import france from "../img/france.png";

export const About = () => {
  return (
    <div className="profile-main-column">
      <h2 className="about-h2">ABOUT</h2>
      <p className="about-p">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="h-line-about"></div>

      <div className="skills-content">
        <h2 className="skills-h2">SKILLS</h2>
        <div className="skills">
          <button className="tag-skills">Android</button>
          <button className="tag-skills">iOS</button>
          <button className="tag-skills">python</button>
          <button className="tag-skills">Javascript</button>
          <button className="tag-skills">Sketch</button>
          <button className="tag-skills">Photoshop</button>
          <button className="tag-skills">C#</button>
          <button className="tag-skills">Illustrator</button>
          <button className="tag-skills">PHP</button>
          <button className="tag-skills">Linux</button>
          <button className="tag-skills">UX</button>
          <button className="tag-skills">UI</button>
          <button className="tag-skills">Android</button>
          <button className="tag-skills">iOS</button>
          <button className="tag-skills">python</button>
          <button className="tag-skills">Javascript</button>
        </div>
      </div>

      <div className="h-line-about"></div>
      <h2 className="languages-h2">LANGUAGES</h2>

      <div className="languages-content">
        <div className="lang-category">
          <img className="flag" alt="usa-flag" src={usa}></img>
          <p className="lang-text">&nbsp;English</p>
        </div>

        <div className="lang-category">
          <img className="flag" alt="usa-flag" src={germany}></img>
          <p className="lang-text">&nbsp;German</p>
        </div>

        <div className="lang-category">
          <img className="flag" alt="usa-flag" src={france}></img>
          <p className="lang-text">&nbsp;French</p>
        </div>
      </div>
    </div>
  );
};
