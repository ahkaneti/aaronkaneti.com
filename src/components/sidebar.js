import React, {useState} from 'react';
import '../styles/sidebar.css';
import Nav from 'react-bootstrap/Nav';
import { RiGithubLine } from 'react-icons/ri';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';

const Sidebar = (props) => {
    const [url, setUrl] = useState('/');
    const navItem = props.mode? 'light-navitem': 'navitem';
    const selectedNav = navItem + ' navitem-selected';
    const color = props.mode? 'black' : 'white';
    const [lightMode, setLightMode] = useState(props.mode);

    function changeMode(event)
    {
      setLightMode(!lightMode);
      props.onChange();
    }

    return(
      <div className={props.mode? "sidebar light-component":"sidebar"}>
        <Nav className="flex-column">
          <Link
           to="/" 
           className={url === "/" ? selectedNav : navItem}
           style={{ textDecoration: "null", marginTop:"10vh"}}
           onClick={() => setUrl('/')}>Home</Link>
          <Link 
           to="/aboutme" 
           className={url === "/aboutme" ? selectedNav : navItem}
           onClick={() => setUrl('/aboutme')}>About Me</Link>
          <Link 
           to="/resume" 
           className={url === "/resume" ? selectedNav : navItem}
              onClick={() => setUrl('/resume')}>Résumé</Link>
          <Link 
           to="/educationexperience" 
           onClick={() => { setUrl('/educationexperience');}}
           className={url === "/educationexperience" ? selectedNav : navItem}>
            Education & Experience</Link>
          <Link 
           to="/projects" 
           className={url === "/projects" ? selectedNav : navItem}
           onClick={() => setUrl('/projects')}>Projects</Link>
          {/* <Link 
           to="/" 
           className={url === "/contactme" ? "navitem navitem-selected" : "navitem"} 
           onClick={() => setUrl('/contactme')}>Contact Me</Link> */}
        </Nav>
        <div style={{marginTop: '5%'}}>
          <Switch
          checked={lightMode}
          onChange={changeMode}
          name="LightModeSwitch"
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
        <div className= "logo-holder">
          <div className = "logo-background">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ahkaneti"><RiGithubLine size={35} color={color}/></a>
          </div>
          <div className="logo-background" style={{marginLeft: "5.5%"}}>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aaronkaneti"><FaLinkedinIn size={30} color={color} style={{paddingTop:"4", paddingLeft: "2",}}/></a>
          </div>
          <div className="logo-background" style={{ marginLeft: "5.5%" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/harunkaneti/"><FaFacebookF size={30} color={color} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
          </div>
          <div className="logo-background" style={{ marginLeft: "5.5%" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/ahkaneti"><FaInstagram size={30} color={color} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;