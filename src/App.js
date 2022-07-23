import React from 'react';

import About from "./components/about/About";
  import Header from "./components/header/Header";
import Nav from './components/nav/Nav';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Project from './components/my_pro/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Resume /> 
      <Project />
      <Contact />     
    </div>
  );
}

export default App;
