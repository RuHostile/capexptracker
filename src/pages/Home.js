import "../App.css";
import React, { useState } from "react";
import Popup from 'reactjs-popup';
import { Navigate } from "react-router-dom";
import Projects from '../data/projects.json';
import Button from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";
const fs = require;

// function does not work try re-structuring in side the home function 

function Home() {

  //set useState to help call funcitons to open pages 
  const [logout, setLogout] = React.useState(false);
  
  const [newProject, toggleNewProject] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDepartment, setProjectDepartment] = useState("");
  const [capExp, setProjectCapExp] = useState("");

  //set navStates
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToRegister, setGoToRegister] = React.useState(false);

  const projectData = {
    Name: projectName,
    Description: projectDescription,
    Department: projectDepartment,
    CapExp: capExp

  }

const saveData = (projectData) => {
  const finished = (error) => {
    if(error){
      console.error(error);
      return;
    }
  }
  const jsonData = JSON.stringify(projectData);
  fs.writeFile('../data/dogs.json', jsonData, finished);
}

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
          <li><Button  href = "/">logout</Button></li>

        </ul>
      </div>
      <div className="main-box">
        <h1>Home Page</h1>
        <div className="main-box-button">
        
        <Popup trigger={<button>new</button>} position="left top">
          <div><h3>New project</h3>
          <Form>
      
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter project name" value={projectName} onChange={(e) => setProjectName(e.target.value)}/>

      
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}/>


        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter department name" value={projectDepartment} onChange={(e) => setProjectDepartment(e.target.value)}/>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Captial Expenditure</Form.Label>
        <Form.Control type="currency" placeholder="$0" value={capExp} onChange={(e) => setProjectCapExp(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="switch" label="Check me out" />
      </Form.Group>
        <Button variant="primary" onClick={() => saveData(projectData)}>Create</Button>
      </Form>
          </div>
        </Popup>
          
          
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
      
    </div>
  );
}

export default Home;
