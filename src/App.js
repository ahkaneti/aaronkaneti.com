import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


//Pages
import Home from './pages/Home';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';
import MobileHome from './pages/MobileHome';

//Components
import Sidebar from './components/sidebar';



//Handlers
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

global.isMobile = window.innerWidth <= 1200 || window.innerHeight < 600;
global.isSmaller = window.innerHeight <= 775;


require('typeface-montserrat');
function App() {

  return (
    <Router basename="/">
      <Switch>
        <React.Fragment>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {global.isMobile? <div></div>:<Sidebar />}
            {/* <Sidebar/> */}
            {global.isMobile? <Route exact path="/" component={MobileHome} />:<Route exact path="/" component={Home} />}
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/educationexperience" component={Education} />
            <Route exact path="/projects" component={Projects} />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
