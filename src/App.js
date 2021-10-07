import React from 'react';
import { Container } from "react-bootstrap";

import './App.css';
import { NavBar } from './components/NavBar';
import { Contacts } from './components/Contacts';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Contacts />
      </Container>
    </div>
  );
}

export default App;
