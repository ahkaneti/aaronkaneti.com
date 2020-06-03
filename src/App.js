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
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <HashRouter basename="/akaneti.com">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Route exact path="/akaneti.com" component={Home} />
            <Route exact path="/akaneti.com/resume" component={Resume} />
            <Route exact path="/akaneti.com/aboutme" component={AboutMe} />
            <Route exact path="/akaneti.com/educationexperience" component={Education} />
            <Route path="/akaneti.com/projects" component={Projects} />
            <Logos />
          </div>
        </React.Fragment>
      </Switch>
    </HashRouter>
  );
}

export default App;
