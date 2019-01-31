import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component = {Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
