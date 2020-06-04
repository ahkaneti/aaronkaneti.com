import React, {useState} from 'react';
import '../styles/sidebar.css';
import Nav from 'react-bootstrap/Nav';
import { RiGithubLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Sidebar(){
    const [url, setUrl] = useState('/');

    return(
      <div className='sidebar'>
        <Nav className="flex-column">
          <Link
           to="/" 
           className={url === "/" ? "navitem navitem-selected" : "navitem"}
           style={{ textDecoration: "null",}}
           onClick={() => setUrl('/')}>Home</Link>
          <Link 
           to="/aboutme" 
           className={url === "/aboutme" ? "navitem navitem-selected" : "navitem"}
           onClick={() => setUrl('/aboutme')}>About Me</Link>
          <Link 
           to="/resume" 
           className={url === "/resume" ? "navitem navitem-selected" : "navitem"}
              onClick={() => setUrl('/resume')}>Resumé</Link>
          <Link 
           to="/educationexperience" 
           onClick={() => { setUrl('/educationexperience'); console.log(url);}}
           className={url === "/educationexperience" ? "navitem navitem-selected" : "navitem"}>
            Education & Experience</Link>
          <Link 
           to="/projects" 
           className={url === "/projects" ? "navitem navitem-selected" : "navitem"}
           onClick={() => setUrl('/projects')}>Projects</Link>
          {/* <Link 
           to="/" 
           className={url === "/contactme" ? "navitem navitem-selected" : "navitem"} 
           onClick={() => setUrl('/contactme')}>Contact Me</Link> */}
        </Nav>

        <div className= "logo-holder">
          <div className = "logo-background">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ahkaneti"><RiGithubLine size={35} color={"white"}/></a>
          </div>
          <div className="logo-background" style={{marginLeft: "12.5%"}}>
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aaronkaneti"><FaLinkedinIn size={30} color={"white"} style={{paddingTop:"4", paddingLeft: "2",}}/></a>
          </div>
          <div className="logo-background" style={{ marginLeft: "12.5%" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/harunkaneti/"><FaFacebookF size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
          </div>
        </div>
      </div>
    )
}