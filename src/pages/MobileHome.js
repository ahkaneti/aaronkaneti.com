import React, {useState} from 'react';
import pic from '../assets/profile_pic.jpg';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import Switch from 'react-ios-switch';


const MobileHome = (props) =>{

  console.log(props)
  const [lightMode, setLightMode] = useState(props.mode);
  function changeMode(event)
  {
    setLightMode(!lightMode);
    props.onChange();
  }
  return(
    <div className="App_mobile">
      <div className={lightMode? "screen light-screen": "screen"}>
        <div className={lightMode? "welcome-text-mobile_main light-top-component" : "welcome-text-mobile_main"}>
          <h1>Welcome!</h1>
        </div>
        <div className="pro_pic_holder">
          <img className="pro_pic_mobile" src={pic} alt='professional_pic' />
        </div>
        <div className ="description-text">
          <h3>I'm Aaron Kaneti. I love creating software that anyone can use.</h3>
        </div>
        <div style={{display:"flex", flexDirection:"row", marginLeft: '20%'}}>
          <Switch
          checked={lightMode}
          onChange={()=> changeMode()}
          />
          <p style={{fontFamily:'Montserrat'}}>Dark Mode Toggle</p>
        </div>
        <div className="routes">
          <Link
              to="/resume"
              className="navitem">
               <div className={lightMode? "route light-component": "route"} style={{marginTop: '1px'}}>Résumé</div>
          </Link>
          <Link
              to="/projects"
              className="navitem">
                <div className={lightMode? "route light-component": "route"}>Projects</div>
          </Link>
          <div className="logo-holder-mobile">
            <div className="logo-background">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ahkaneti"><RiGithubLine size={35} color={"white"} /></a>
            </div>
            <div className="logo-background" style={{ marginLeft: "5.5%" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aaronkaneti"><FaLinkedinIn size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
            </div>
            <div className="logo-background" style={{ marginLeft: "5.5%" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/harunkaneti/"><FaFacebookF size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
            </div>
            <div className="logo-background" style={{ marginLeft: "5.5%" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/ahkaneti"><FaInstagram size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHome;