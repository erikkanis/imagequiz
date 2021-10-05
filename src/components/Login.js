import customers from "../communication/customers";
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let login = (e) => {
      e.preventDefault();
        let found = customers.find(x => x.username === username & x.password === password);
        console.log(customers);
        if (found) {
          console.log(found);
          history.push({pathname: '/', state: {username: username}});
        }
    }

    let onUsernameChanged = (e) => {
        setUsername(e.target.value);
    }

    let onPasswordChanged = (e) => {
        setPassword(e.target.value);
    }

    return (
    <Form onSubmit={login}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={username} onChange={onUsernameChanged} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default Login;