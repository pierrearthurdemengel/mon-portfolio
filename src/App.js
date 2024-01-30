import React from 'react';
import Header from './Header';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Projet from './Projet';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projet />
      <Contact />
    </div>
  );
}

export default App;