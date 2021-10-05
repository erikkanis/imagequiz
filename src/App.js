import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Menu from './components/Menu';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Container>
      <Row>
        <Col>This is my header.</Col>
      </Row>
      <Row>
        <Col><Menu/></Col>
      </Row>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
