import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './utils/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        {/* <Link to='./login' 
            style={{ textDecoration: 'none', color: 'white', padding: '2%' }}>
            Login</Link> */}
        {/* <Link onClick={logout} 
            style={{ textDecoration: 'none', color: 'white', padding: '2%' }}>
            Logout</Link> */}
        <Link to='/bubbles' 
            style={{ textDecoration: 'none', color: 'white', padding: '2%' }}>
            Bubbles</Link>
        </nav>
        <Switch>
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute