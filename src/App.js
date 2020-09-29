import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


//Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';
import MobileHome from './pages/MobileHome';
import ProjectsMobile from './pages/ProjectsMobile';
import Project from './components/singularProject';
import ProjectMobile from './components/singularProjectMobile';

//Assets
import projects from './assets/projects.json';


//Components
import Sidebar from './components/sidebar';



//Handlers
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

global.isMobile = window.innerWidth <= 1200 || window.innerHeight < 600;
global.isSmaller = window.innerHeight <= 775;

require('typeface-montserrat');
export default function App() {
  const [mode, setMode] = useState(true)

  function handleChange() {
    setMode(!mode);
  }
  return (
    <Router basename="/">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {global.isMobile? <div/>:<Sidebar mode={mode} onChange={handleChange}/>}
            {global.isMobile? <Route exact path="/" component={() => <MobileHome mode={mode} onChange={handleChange}/>} />:<Route exact path="/" component={() => <Home mode={mode}/>}/>}
            <Route exact path="/aboutme" component={() => <AboutMe mode={mode}/>}/>
            <Route exact path="/resume" component={() => <Resume mode={mode}/>} />
            <Route exact path="/educationexperience" component={() => <Education mode={mode}/>} />
            {projects.projects.map(project => 
              <Route 
              path ={'/projects/' + project.name} 
              key={project.name} 
              component={()=> global.isMobile? 
              <ProjectMobile project={project} mode={mode}/>
              : <Project project={project} mode={mode} />
              }/>
            )}
            <Route exact path="/projects" component={()=> global.isMobile? <ProjectsMobile mode={mode}/>:<Projects mode={mode}/>}/>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}


