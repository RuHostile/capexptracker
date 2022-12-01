import "../App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

function Register() {
  const [goToLogin, setGoToLogin] = React.useState(false);

  if (goToLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Register Your Account</h1>
      <button onClick={() => setGoToLogin(true)}> Register </button>
    </div>
  );
}

export default Register;
