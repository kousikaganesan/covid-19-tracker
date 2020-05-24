import React from "react";
import Overview from "../Overview/overview.js";

import "./header.css";

const Header = ({ global }) => {
  return (
    <div className="header">
      <div className="title">COVID-19 Tracker </div>
      <div className="global-overview">
        <Overview global={global} />
      </div>
    </div>
  );
};

export default Header;
