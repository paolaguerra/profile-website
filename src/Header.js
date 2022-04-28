import React from "react";
import cool from "./img/cool.png";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <div className="header-box">
      <img className="logo" alt="logo" src={cool}></img>
      <Menu
        hiw="HOW IT WORS"
        browse="BROWSE"
        search="SEARCH"
        sap="START A PROFILE"
        aya="ADD YOUR AGENCY"
      ></Menu>
    </div>
  );
};
