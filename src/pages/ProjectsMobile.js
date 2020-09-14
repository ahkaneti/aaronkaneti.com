import React from 'react';
import '../styles/App.css';
import '../styles/ProjectsMobile.css';

import projects from '../assets/projects.json';

import { Accordion, Card } from 'react-bootstrap';


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
            <Accordion>
              <Card className="box" key={project.name}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  {project.name === "Hearo" ? <img src={HearoLogo} alt="Hearo Logo" className="project-logo" /> : <div />}
                  {project.name === "TaskFull" ? <img src={TaskfullLogo} alt="Taskfull Logo" className="project-logo" /> : <div />}
                  {project.name === "LetMeAsk" ? <img src={LetMeAskLogo} alt="LetMeAsk Logo" className="project-logo" /> : <div />}
                  {project.name === "hymn" ? <p style={{ fontFamily: 'Montserrat', marginTop: '1vh', paddingTop: '.4rem', fontSize: "25px"}}>hymn</p> : <div />}
                  {project.name === "hymn" ?<p/> : <p style={{marginTop: "3vh"}}><strong>{project.name}</strong></p>}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="line">
                      <a target="_blank" rel="noopener noreferrer" href={project.github_link}>{project.github_link}</a>
                    </div>
                    <div className="line"><p>Tech Stack: </p><p>{project.used_technologies}</p></div>
                    <div className="line"><p>Description: </p><p>{project.description}</p></div>
                    <div className="line"><p>Team Members: </p><p>{project.contributors}</p></div>
                    {project["other links"] ?
                      <div className="line">
                        <p>Other Links:</p>
                        <a href={project["other links"]} target="_blank" rel="noopener noreferrer">{project["other links"]} </a>
                      </div> :
                      <div />
                    }
                    {/* <Button style={{fontFamily:'Montserrat'}}>{project.name}'s Page</Button> */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          )}
        </div>
      </div>
    </div>
  )
}