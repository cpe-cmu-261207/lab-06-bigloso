import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import About from './components/About';
import Select from './components/History';
import Result from './components/Result';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact>
          <Current></Current>
        </Route>
        <Route path='/current'>
          <Current></Current>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/history/select'>
          <Select></Select>
        </Route>
        <Route path='/history/result'>
          <Result></Result>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;