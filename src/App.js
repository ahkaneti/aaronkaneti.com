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
import { BrowserRouter as HashRouter, Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Link to="/" component={Home} />
            <Link to="/resume" component={Resume} />
            <Link to="/aboutme" component={AboutMe} />
            <Link to="/educationexperience" component={Education} />
            <Link to="/projects" component={Projects} />
            <Logos />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
