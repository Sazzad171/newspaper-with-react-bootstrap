import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/layout/Header';
import HomeHero from './components/home/HomeHero';
import FullBody from './components/home/FullBody';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeHero/>
      <FullBody/>
    </div>
  );
}

export default App;
