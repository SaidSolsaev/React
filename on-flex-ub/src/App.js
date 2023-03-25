import './App.css';
import React from "react";
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PopUp from './components/PopUp';
import OmOss from './components/OmOss';
import Team from './components/Team';
import Kontakt from './components/Kontakt';


function App() {


  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <PopUp />
      <OmOss />
      <Team />
      <Kontakt />
      <Footer />
    </div>
  );
};

export default App;
