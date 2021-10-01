import Signup from './components/Signup';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';
import { Navbar, Nav, Container, Component } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as HashRouter, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/signup'>
          <Signup></Signup>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
