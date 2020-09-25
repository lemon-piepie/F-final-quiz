import React, { Component } from 'react';
// TODO 一般会写成 BrowserRouter as Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import addTrainee from '../Components/addTrainee';
import Homepage from '../Components/Homepage';
import addTrainer from '../Components/addTrainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/addTrainee" component={addTrainee}></Route>
          <Route exact path="/addTrainer" component={addTrainer}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
