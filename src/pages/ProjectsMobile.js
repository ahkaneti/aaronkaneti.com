import React from 'react';
import '../styles/App.css';
import '../styles/ProjectsMobile.css';

import projects from '../assets/projects.json';

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import HearoLogo from '../assets/HearoLogo.png';
import TaskfullLogo from '../assets/TaskfullLogo.jpg';
import LetMeAskLogo from '../assets/LetMeAskLogo.png';
import NUPayLogo from '../assets/NUWalletLogo.png';


const ProjectsMobile=(props)=>
{
  return(
    <div className="App">
      <div className = {props.mode? "midpart light-screen": "midpart"}>
      <div className={props.mode? "welcome-text-mobile light-top-component":"welcome-text-mobile"}>
          <Link to ="/" style={{marginTop:'15px', marginLeft: '10px', marginRight: '15px'}}>
            <Button style={{fontFamily: 'Montserrat'}}>
              Home
            </Button>
          </Link>
            <h1 style={{marginTop: '2%'}}>Projects</h1>
        </div>
        <div className ="outer-holder">
          {projects.projects.map(project =>
              <Link
              to={'/projects/' +project.name}>
              <Card className={props.mode? "box_mobile-light box_mobile":"box_mobile"} key={project.name}>
                  {project.name === "hymn" ? <p style={{ fontFamily: 'Montserrat', marginTop: '2vh', paddingTop: '.4rem', fontSize: "15px"}}>hymn</p>
                   : 
                   <p style={{marginTop: "3vh"}}><strong>{project.name}</strong></p>}
                  {project.name === "Hearo" ? <img src={HearoLogo} alt="Hearo Logo" className="project-logo-mobile" /> : <div />}
                  {project.name === "TaskFull" ? <img src={TaskfullLogo} alt="Taskfull Logo" className="project-logo-mobile" /> : <div />}
                  {project.name === "NUPay" ? <img src={NUPayLogo} alt="NUPay Logo" className="project-logo-mobile" /> : <div />}
                  {project.name === "LetMeAsk" ? <img src={LetMeAskLogo} alt="LetMeAsk Logo" className="project-logo-mobile" /> : <div />}
              </Card>
              </Link>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProjectsMobile;