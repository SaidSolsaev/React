import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import SalahCalender from './SalahCalender';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const handleNav = () => navigate("/salahcalender")
    const goBack = () => navigate("/")
    const goQibla = () => navigate("/qibla")
    const goQuran = () => navigate("/quran")
    const goNames = () => navigate("/99-Names-of-God");

  return (
    <Container>
        <nav className='container'>
            <ul>
            <li><button onClick={goNames}>99 Names of God</button></li>
                <li><button onClick={goQuran}>Quran</button></li>
                <li><button onClick={goQibla}>Qibla</button></li>
                <li><button onClick={handleNav}>Calender</button></li>
                <li><button onClick={goBack}>Home</button></li>
            </ul>
        </nav>
    </Container>
  );
}


const Container = styled.div`
    nav{
        width: 100%;
        background-color: #333;
        height: 70px;
    }

    ul{
        list-style-type: none;
        top: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li{
        align-items: center;
        justify-content: center;
        display: flex;
        float: right;
        margin: 10px;
    }

    li button{
        background-color: transparent;
        cursor: pointer;
        border: none;
        display: block;
        text-align: center;
        font-size: 24px;
        color: white;
        padding: 12px 14px;
    }

    li:hover{
        border-bottom:3px solid #04AA6D;
    }

   

    .active{
        background-color: #04AA6D;
    }
`;

