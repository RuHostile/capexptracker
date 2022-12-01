import "../App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";

function Login() {
  //mysql
  var mysql = require('mysql');

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
    <div>
      <form>
        <h1>Login</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button onClick={() => setGoToHome(true)}>login</button>
      </form>
      <button onClick={() => setGoToRegister(true)}>
        register a account
      </button>
    </div>
  );
}

export default Login;
