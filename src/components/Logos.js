import React from "react";

import "../styles/logos.css";
import NULogo from "../assets/NULogo.png";
import IEEELogo from "../assets/IEEELogo.png";
import HearoLogo from "../assets/HearoLogo.png";

import { Link } from "react-router-dom";

const Logos = (props) => {
  return (
    <div>
      <div
        className={props.mode ? "logo_holder light-component" : "logo_holder"}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://ieee.northwestern.edu"
        >
          <img src={IEEELogo} alt="IEEE Logo" className="logo" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://northwestern.edu"
        >
          <img src={NULogo} alt="Northwestern Logo" className="logo" />
        </a>
        <Link
          to="/projects/hymn"
          className={props.mode ? "light-logo_text" : "logo_text"}
          styles={{ fontFamily: "Montserrat" }}
        >
          hymn
        </Link>
        <Link to="/projects/Hearo">
          <img src={HearoLogo} alt="Hearo Logo" className="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Logos;
