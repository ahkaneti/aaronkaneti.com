import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'App.css';
import 'remixicon/fonts/remixicon.css';

import { Home } from 'containers/Home';
import { ColorTest } from 'containers/ColorTest';
import { ColorTest as ColorTestLight } from 'containers/ColorTestLIGHT';
import { NoMatchPage } from 'containers/NoMatchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/color_test" component={ColorTest} />
        <Route path="/color_testlight" component={ColorTestLight} />
        <Route>
          <NoMatchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
