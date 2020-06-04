import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';

//Components
import Sidebar from './components/sidebar';
import Logos from './components/Logos';


//Handlers
import { HashRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <Router basename="/">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/educationexperience" component={Education} />
            <Route exact path="/projects" component={Projects} />
            <Logos />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
