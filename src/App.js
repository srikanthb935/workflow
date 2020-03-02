import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import DataGrid from './components/grid/data-grid.component';
import ProgressWorkflow from './components/progress/progress-workflow.component';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/list" component={DataGrid}></Route>
      <Route path="/progress" component={ProgressWorkflow}></Route>
    </Switch>
  );
}

export default App;
