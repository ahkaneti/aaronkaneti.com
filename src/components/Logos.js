import React from 'react';
import '../styles/logos.css';
import NULogo from '../assets/NULogo.png'
import IEEELogo from '../assets/IEEELogo.png'
import HearoLogo from '../assets/HearoLogo.png'

class Logos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="logo_holder">
        <img src={IEEELogo} alt="IEEE Logo" className="logo"/>
        <img src={NULogo} alt="Northwestern Logo" className="logo"/>
        <a target="_blank" rel="noopener noreferrer" className="logo_text" styles={{ fontFamily: "Montserrat"}} href ="http://hymnco.com/newLook">hymn</a>
        <img src={HearoLogo} alt="Hearo Logo" className="logo" />
      </div>
    )
  }
}

export default Logos;