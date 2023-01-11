import "../App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import Projects from '../data/projects.json';
import Button from "react-bootstrap/Button";

function getProjects() {
    Projects && Projects.map( project => {
              return (
                <div className="projectBox" key={project.ID}>
                  <strong>{project.Name}</strong> <br />
                  { project.Description }<br />
                  { project.Department }<br />
                  capital expenditure : { project["Capital Expenditure"] }<br /> 
                </div>
              )
            } )
}

function Home() {

  
  const [logout, setLogout] = React.useState(false);

  if (logout) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="v-navbar">
        <ul>
          <h1>Capital Expenditure Tracker</h1>
          <li><a className="active" herf="#home">Home</a></li>
          <li><a href="#">Description</a></li>
          <li><a href="/">Logout</a></li>
          <li><Button href="/">logout</Button></li>

        </ul>
      </div>
      <div className="main-box">
        <h1>Home Page</h1>
        <div className="main-box-button">
          <button>new</button>
          <getProjects></getProjects>
        </div>
        
        <div className="projectBox-container">

          {
            Projects && Projects.map( project => {
              return (
                <div className="projectBox" key={project.ID}>
                  <strong>{project.Name}</strong> <br />
                  { project.Description }<br />
                  { project.Department }<br />
                  capital expenditure : { project["Capital Expenditure"] }<br /> 
                </div>
              )
            } )
          }
        </div>      
      </div>
      <getProjects/>
      
    </div>
  );
}

export default Home;
