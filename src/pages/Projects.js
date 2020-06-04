import React from 'react';  
import '../styles/App.css';
import '../styles/Projects.css';
import  projects from '../assets/projects.json';
import { Accordion, Card } from 'react-bootstrap';



function Projects()
{
  return(
  <div className="App">
    <div className="midpart">
      <div className="outer-holder">
        {/* <div className="legend">
          <div className="singular-legend"><div className="react legend-circle"></div>react</div>
          <div className="singular-legend"><div className="react-native legend-circle"></div>react native</div>
          <div className="singular-legend"><div className="python legend-circle"></div>python</div>
        </div> */}
          
          {projects.projects.map(project =>
            <Accordion>
              <Card className="box" key={project.name}>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <strong>{project.name}</strong>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="line"><p>Github Link: </p><a target="_blank" rel="noopener noreferrer" href={project.github_link}>{project.github_link}</a></div>
                    <div className="line"><p>Tech Stack: </p><p>{project.used_technologies}</p></div>
                    <div className="line"><p>Description: </p><p>{project.description}</p></div>
                    <div className="line"><p>Team Members: </p><p>{project.contributors}</p></div>
                    <div className="line"><p>Other Links:</p> <a href={project["other links"]} target="_blank" rel="noopener noreferrer">{project["other links"]} </a></div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          )}
      </div>
    </div>
  </div>
  );
}

export default Projects;