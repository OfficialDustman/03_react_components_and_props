import React from 'react';
import './style.css'

import { Note } from './components/Note';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Flexgrid } from './components/Flexgrid';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <Note />
      <Header />
      <Navbar />
      <Flexgrid />
      <Footer />
    </>
  );
} 

export default App;
