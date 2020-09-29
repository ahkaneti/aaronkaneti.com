import React from 'react';

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

  return (
    <Router basename="/">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {global.isMobile? <div/>:<Sidebar />}
            {global.isMobile? <Route exact path="/" component={MobileHome} />:<Route exact path="/" component={Home} mode={false}/>}
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/educationexperience" component={Education} />
            {global.isMobile? projects.projects.map(project => 
              <Route path ={'/projects/' + project.name} key={project.name}>
                <ProjectMobile project={project}></ProjectMobile>
              </Route>
              )
              : projects.projects.map(project => 
              <Route path ={'/projects/' + project.name} key={project.name}>
                <Project project={project}></Project>
              </Route>
              )
            }
            {global.isMobile? <Route exact path="/projects" component={ProjectsMobile} />:<Route exact path="/projects" component={Projects} />}
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}


