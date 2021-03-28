import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'App.css';
import 'remixicon/fonts/remixicon.css';

import { Home } from 'containers/Home';

import { MobileHome } from 'containers/MobileHome';

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
        <Route>
          <NoMatchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
