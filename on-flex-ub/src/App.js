import './App.css';
import React from "react";
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {


  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
