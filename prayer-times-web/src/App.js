import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Loading from './Components/Loading';
import SalahCalender from './Components/SalahCalender';
import styled from 'styled-components';
import { Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Qibla from './Components/Qibla';
import Quran from './Components/Quran';
import GodsNames from './Components/GodsNames';

function App() {
  const date = new Date();
  const dateToday = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const [items, setItems] = useState({});
  // const [method, setMethod] = useState(4);
  const [city, setCity] = useState("Oslo");
  const [country, setCountry] = useState("Norway");
  const [chooseMonth, setMonth] = useState(month);


  useEffect(() => {
    async function fetchData(){
      fetch(`http://api.aladhan.com/v1/calendarByCity/${year}/${chooseMonth}?city=${city}&country=${country}&method=1`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
    }
    fetchData();
  }, [city, country, year, chooseMonth, country]);

  // console.log(items.data[dateToday-1].date.hijri.year)
  
  return (
    <Container>
      <Navbar />
      {items.data ? (
      <Routes>
        <Route exact path="/" element={<Header items={items} today={dateToday} city={city} setCity={setCity} setCountry={setCountry}/>}/>
        <Route path='/salahcalender' element={<SalahCalender items={items} city={city} setMonth={setMonth}/>} />
        <Route path='/qibla' element={<Qibla />} />
        <Route path='/quran' element={<Quran />} />
        <Route path='/99-Names-of-God' element={<GodsNames />} />
      </Routes>
      ) : (
        <Loading />)} 
  
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