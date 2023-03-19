import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Loading from './Components/Loading';
import SalahCalender from './Components/SalahCalender';
import styled from 'styled-components';
import {BrowserRouter as Router ,Link, Route, Routes, Navigate} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [items, setItems] = useState({});
  const [method, setMethod] = useState(4);
  const [city, setCity] = useState("Oslo");
  const [country, setCountry] = useState("Norway");
  const date = new Date();
  const dateToday = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  console.log(year)


  useEffect(() => {
    async function fetchData(){
      fetch(`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=${country}&method=0`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
    }
    fetchData();
  }, [city]);

  // console.log(items.data[dateToday-1].date.hijri.year)
  
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route exact path="/" element=
          {items.data ? (
            // <SalahCalender items={items} /> 
            <Header items={items} today={dateToday} city={city} setCity={setCity} setCountry={setCountry}/>
    
          ) : (
            <Loading />)} />
          <Route path='/salahcalender' element={<SalahCalender items={items} />} />
      </Routes>
      <Footer />

    
    </Container>
  );
}

export default App;

const Container = styled.div`
  .container {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
  }

`;