import React from 'react';
import '../styles/App.css';
import '../styles/ProjectsMobile.css';

import projects from '../assets/projects.json';

import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


import HearoLogo from '../assets/HearoLogo.png';
import TaskfullLogo from '../assets/TaskfullLogo.jpg';
import LetMeAskLogo from '../assets/LetMeAskLogo.png';


export default function ProjectsMobile()
{
  return(
    <div className="App">
      <div className = "midpart">
        <div className ="outer-holder">
          {projects.projects.map(project =>
              <Link
              to={'/projectsMobile/' +project.name}>
              <Card className="box_mobile" key={project.name}>
                  {project.name === "Hearo" ? <img src={HearoLogo} alt="Hearo Logo" className="project-logo-mobile" /> : <div />}
                  {project.name === "TaskFull" ? <img src={TaskfullLogo} alt="Taskfull Logo" className="project-logo-mobile" /> : <div />}
                  {project.name === "LetMeAsk" ? <img src={LetMeAskLogo} alt="LetMeAsk Logo" className="project-logo-mobile" /> : <div />}
                  {project.name === "hymn" ? <p style={{ fontFamily: 'Montserrat', marginTop: '1vh', paddingTop: '.4rem', fontSize: "25px"}}>hymn</p> : <div />}
                  {project.name === "hymn" ?<p/> : <p style={{marginTop: "3vh"}}><strong>{project.name}</strong></p>}
              </Card>
              </Link>
          )}
        </div>
      </div>
    </div>
  )
}