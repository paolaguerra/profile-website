import React, { useState } from "react";
import { Header } from "./Header";
import "./index.css";
import { ProfileMainBox } from "./ProfileMainBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { TabContainer } from "./Tabs/TabContainer";

export const Contenedor = () => {
  return (
    <div className="contenedor-principal">
      <Header></Header>
      <button className="back">
        <FontAwesomeIcon icon={faChevronLeft} />
        &nbsp;Back to search results
      </button>
      <ProfileMainBox
        avail="Full-time (40hr/wk)"
        age="30"
        locat="Seoul, South Korea"
        exp="6"
      ></ProfileMainBox>
      <TabContainer></TabContainer>
    </div>
  );
};
