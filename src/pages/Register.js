import "../App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import  Form  from "react-bootstrap/Form";
import Users from '../data/users.json';

function Register(props) {
  const [goToLogin, setGoToLogin] = React.useState(false);

  //set user data 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      username,
      email,
      password,
    }
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  if (goToLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Register Your Account</h1>
      <div className="container-register">
        <Form>
          <Form.Group>
            <Form.Label>Enter Username</Form.Label>
            <Form.Control></Form.Control>
            <Form.Text></Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter Email</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Re-Enter Email</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter Password</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>

        </Form>
      </div>
      <button onClick={transferValue}>Save</button>
      <button onClick={() => setGoToLogin(true)}> Go Back </button>
    </div>
  );
}

export default Register;
