import React from "react";
import PropTypes from "prop-types";

export const Menu = (props) => {
  return (
    <ul className="menu">
      <li className="menu-items">{props.hiw}</li>
      <li className="menu-items">{props.browse}</li>
      <li className="menu-items">{props.search}</li>
      <li className="menu-items">{props.sap}</li>
      <li className="menu-items">{props.aya}</li>
    </ul>
  );
};

Menu.propTypes = {
  hiw: PropTypes.string.isRequired,
  browse: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  sap: PropTypes.string.isRequired,
  aya: PropTypes.string.isRequired,
};
