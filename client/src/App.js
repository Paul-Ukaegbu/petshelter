import React from 'react';
import './App.css';
import AddPet from './components/AddPet'
import {Router} from '@reach/router'
import NavBar from "./components/NavBar"
import Main from './components/Main'
import Edit from './components/Edit'
import Display from './components/Display'
import 'bootstrap/dist/css/bootstrap.min.css'

  function App() {
    return (
      <div className="App">
        <div className = "header">
          <NavBar/>
        </div>
        <Router>
          <Main path = "/" />
          <AddPet path = "/new"/>
          <Edit path = "/pets/:id/edit" />
          <Display path = "/api/pets/:id"/>
        </Router>
      
      </div>
    );
  }

export default App;

