import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import HomeHero from './components/home/HomeHero';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeHero/>
    </div>
  );
}

export default App;
