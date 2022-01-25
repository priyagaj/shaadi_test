import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Login from './screen/Login/Login'
import Users from './screen/Users/Users'
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
        <Route component={Login} exact path='/' />
        <Route component={Login} exact path='/home' />
        <Route component={Users} exact path='/users' />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
