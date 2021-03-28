import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'App.css';
import 'remixicon/fonts/remixicon.css';

import { Home } from 'containers/Home';

import { MobileHome } from 'containers/MobileHome';
// import { ColorTest } from 'containers/ColorTest';
// import { ColorTest as ColorTestLight } from 'containers/ColorTestLIGHT';
import { NoMatchPage } from 'containers/NoMatchPage';

import { useWindowSize } from 'hooks/useWindowSize';

export default function App() {
  const windowSize = useWindowSize();
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (windowSize.width <= 1200) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, [windowSize]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={small ? MobileHome : Home}
          small={small}
        />
        {/* <Route path="/color_test" component={ColorTest} /> */}
        {/* <Route path="/color_testlight" component={ColorTestLight} /> */}
        <Route>
          <NoMatchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
