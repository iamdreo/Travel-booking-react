import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import 'semantic-ui-css/semantic.min.css';

import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const Results = lazy(() => import('./pages/Results'));
const Package = lazy(() => import('./pages/PackagePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

const fallbackStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '14%'
}

function App() {
  return (

    <Router>

      <Suspense fallback={
        <div style={fallbackStyle} >
          <Spin size="large" tip="Loading..." style={{ color: 'black' }}>

          </Spin>
        </div>}>

        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/details/:id">
            <Package />
          </Route>
          <Route >
            <ErrorPage />
          </Route>

        </Switch>
      </Suspense>
    </Router>




  );
}


export default App;
