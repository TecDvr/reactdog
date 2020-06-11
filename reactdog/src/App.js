import { datadogRum } from '@datadog/browser-rum';
import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Test from './components/Test/test';
import Landing from './components/Landing/landing';
import history from './history';

require('dotenv').config();
const yourAppID = process.env.REACT_APP_APPID
const yourCliToken = process.env.REACT_APP_CLITOKEN

datadogRum.init({
  applicationId: `${yourAppID}`,
  clientToken: `${yourCliToken}`,
  datacenter: 'us',
  sampleRate: 100,
});

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router history={history}>
          <Route
            exact
            path='/'
            component={Landing}>
          </Route>
          <Route
            exact
            path='/test'
            component={Test}>
          </Route>
        </Router>
      </div>
    )
  }
}

