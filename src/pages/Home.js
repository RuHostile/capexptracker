import "../App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

function Home() {
  const [logout, setLogout] = React.useState(false);

  if (logout) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setLogout(true)}>Logout</button>
    </div>
  );
}

export default Home;
