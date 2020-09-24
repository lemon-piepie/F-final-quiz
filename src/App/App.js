import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import addTrainee from '../Components/addTrainee'
import Homepage from '../Components/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {Homepage}></Route>
          <Route exact path = "/addTrainee" component = {addTrainee}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
