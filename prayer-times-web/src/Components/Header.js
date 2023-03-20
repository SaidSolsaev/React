import styled from "styled-components"
import React, {useState, useEffect} from 'react'
import mosque from "../assets/Images/mosque.jpg"

export default function Header({items, today, city, setCity, setCountry}) {

    const getValueInput = () => {
        let cityInpValue = document.getElementById("searchInp").value;
        let countryInpValue = document.getElementById("searchCountryInp").value;
        // console.log(cityInpValue);
        if (cityInpValue !== "" && countryInpValue !== ""){
            setCity(cityInpValue);
            setCountry(countryInpValue);
        }else{
            alert("Fill in the inputs!")
        }
    }

    return (
        <Container>
            <div className="container">

                <div className="table">
                    <div className="searchContainer">
                        <input className="searchCity" placeholder="Search for city" id="searchInp" required />
                        <input className="searchCountry" placeholder="Search for Country" id="searchCountryInp" required />
                        
                    </div>
                    <div className="btnContainer">
                        <button className="searchBtn" onClick={getValueInput}>Search</button>
                    </div>

                    <h1>
                        Salah Times Today for {city}:
                        <span lang="en">
                            {` ` + items.data[today -1].date.readable}
                        </span>
                    </h1>

                    <table id="tableContent">
                        <tr>
                            <th>Fajr</th>
                            <th>Sunrise</th>
                            <th>Dhur</th>
                            <th>Asr</th>
                            <th>Maghrib</th>
                            <th>Ishaa</th>
                        </tr>
                        <td>{items.data[today - 1].timings.Fajr}</td>
                        <td>{items.data[today - 1].timings.Sunrise}</td>
                        <td>{items.data[today - 1].timings.Dhuhr}</td>
                        <td>{items.data[today - 1].timings.Asr}</td>
                        <td>{items.data[today - 1].timings.Maghrib}</td>
                        <td>{items.data[today - 1].timings.Isha}</td>
                    </table>
                </div>
            </div>
            
        </Container>

    );
};


const Container = styled.div`
    width: 100%;

    .table{        
        height: 200px;
        width: 80%;
        positon: relative;
        align-self: center;
        margin: auto;
        padding: 2rem;
        display: flex;
        min-height: 100vh;
        align-items: center;
        flex-direction: column;

        h1{
            text-align: center;
            color: white;
            margin-bottom: 1rem;
        }
        
        #tableContent{
            border-collapse: collapse;
            width: 100%;
            align-content: center;
            margin-left: auto;
            margin-right: auto;
            
            th{
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #04AA6D;
            }

            td, th{
                border: 1px solid #ddd;
                padding: 8px;
                color: black;
                font-size: 24px;
            }
            
            td{
                color: white;
            }
        }
    }

    .searchCity{
        background: none;
        border: none;
        border-bottom: 2px solid white;
        width: 10rem;
        outline: none;
        color: white;
        padding: 0.4rem 0.1rem;
        margin-bottom: 1rem;
        &::placeholder{
            color: rgba(255,255,255,0.6);
            
        }
    }

    .searchCountry{
        background: none;
        border: none;
        border-bottom: 2px solid white;
        width: 10rem;
        outline: none;
        color: white;
        padding: 0.4rem 0.1rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        &::placeholder{
            color: rgba(255,255,255,0.6);
        }
    }

    .searchBtn{
        background-color: #04AA6D;
        display: inline-block;
        padding: 0.3em 1.2em;
        margin: .5rem 0 3rem;
        border:0.16em solid rgba(255,255,255,0);
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-weight:600;
        text-align: center;
        transition: all 0.2s;
        font-size: 18px;
        
        &:hover{
            border-color: rgba(255,255,255,1);
        }
    }
    
`;