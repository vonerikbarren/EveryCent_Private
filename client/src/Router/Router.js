import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import Theme from '../Components/Theme/Theme';

import HomePage from '../Pages/HomePage/HomePage';
import _Dashboard from '../Pages/Dashboard/_Dashboard';






export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/Dashboard" component={_Dashboard} />

        </Switch>
      </Router>
    </ThemeProvider>

  );
}