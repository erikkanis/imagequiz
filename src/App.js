import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Register from './components/Register';
import Menu from './components/Menu';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let onCustomerLoggedIn = () => {
    setIsAuthenticated(true);
  }

  return (
    <HashRouter>
    <div>
      <Container>
      <Row>
        <Col>This is my header.</Col>
      </Row>
      <Row>
        <Col><Menu isAuthenticated={isAuthenticated}/></Col>
      </Row>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login onCustomerLoggedIn={onCustomerLoggedIn} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
        </Switch>
        <Row>
          <Col>Footer</Col>
        </Row>
      </Container>
      </div>
    </HashRouter>
  );
}

export default App;
