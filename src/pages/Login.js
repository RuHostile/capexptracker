import "../App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Button from 'react-bootstrap/button';
import  Form  from "react-bootstrap/Form";

function Login() {
  //mysql
//  var mysql = require('mysql');

  //set user details
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //set navStates
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToRegister, setGoToRegister] = React.useState(false);

  //check to nav
  if (goToHome) {
    return <Navigate to="/home" />;
  }
  if (goToRegister) {
    return <Navigate to="/register" />;
  }

  return (
    <div className="container-login">
      <h1>login</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Form.Text className="text-muted">
          Your usename or email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
        <Button variant="primary" onClick={() => setGoToHome(true)}>login</Button>
      </Form>
      <Button onClick={() => setGoToRegister(true)}>
        register a account
      </Button>
    </div>
  );
}

export default Login;
