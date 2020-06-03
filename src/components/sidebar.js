import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css';
import { RiGithubLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { BrowserRouter as Router} from 'react-router-dom';


export default function Sidebar(){
    const [url, setUrl] = useState('/');

    return(
      <div className='sidebar'>
        <Router>
        <Nav className="flex-column">
          <Nav.Link
           href="/" 
           className={url === "/" ? "navitem navitem-selected" : "navitem"}
           style={{ textDecoration: "null",}}
           onClick={() => setUrl('/')}>Home</Nav.Link>
          <Nav.Link 
           href="/aboutme" 
           className={url === "/aboutme" ? "navitem navitem-selected" : "navitem"}
           onClick={() => setUrl('/aboutme')}>About Me</Nav.Link>
          <Nav.Link 
           href="/resume" 
           className={url === "/resume" ? "navitem navitem-selected" : "navitem"}
           onClick={() => setUrl('/resume')}>Resumé</Nav.Link>
          <Nav.Link 
           href="/educationexperience" 
           onClick={() => {setUrl('/educationexperience'); console.log(url);}}
           className={url === "/educationexperience" ? "navitem navitem-selected" : "navitem"}>
            Education & Experience</Nav.Link>
          <Nav.Link 
           href="/projects" 
           className={url === "/projects" ? "navitem navitem-selected" : "navitem"}
           onClick={() => setUrl('/projects')}>Projects</Nav.Link>
          <Nav.Link href="/" className={"navitem"}>Contact Me</Nav.Link>
        </Nav>
        </Router>
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