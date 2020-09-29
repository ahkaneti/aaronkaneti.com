import React from 'react';

import '../styles/logos.css';
import NULogo from '../assets/NULogo.png';
import IEEELogo from '../assets/IEEELogo.png';
import HearoLogo from '../assets/HearoLogo.png';

import { Link } from 'react-router-dom';

// var isMobile = window.innerWidth <= 1200 || window.innerHeight < 600;
var isMobile = false;

const Logos = (props) =>{
  return(
    <div>
      <div className={props.mode? "logo_holder light-component":"logo_holder"}>
        <a target="_blank" href="http://ieee.northwestern.edu"><img src={IEEELogo} alt="IEEE Logo" className="logo" /></a>
        <a target="_blank"href="https://northwestern.edu"><img src={NULogo} alt="Northwestern Logo" className="logo" /></a>
        <a target="_blank" rel="noopener noreferrer" className={props.mode? "light-logo_text":"logo_text" }styles={{ fontFamily: "Montserrat" }} href="http://hymnco.com/">hymn</a>
        <Link
          to ="/projects/Hearo">
            <img src={HearoLogo} alt="Hearo Logo" className="logo" />
          </Link>
      </div>
      
    </div>
  )
}


export default Logos;