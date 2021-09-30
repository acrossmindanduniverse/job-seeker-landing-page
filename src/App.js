import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ActiveJobs from './pages/ActiveJobs';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jobs" component={ActiveJobs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
