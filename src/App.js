import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header/>
      </Container>
    </div>
  );
}

export default App;
