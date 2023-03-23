import React from 'react'
import styled from 'styled-components'

export default function SalahCalender({items, city, setMonth}) {

    const date = new Date();
    const month = date.getMonth() + 1;

    const handleChange = () =>{
        let val = document.getElementById("dropdownMenu").value
        {setMonth(val)}
    };

    return (
        <Container>
            <div name="salahcalender" className='table'>
                <h1>Salah Calender for {city}</h1>
                <h2>{items.data?.map((days,key)=>days.date.hijri.month["en"][key])}/{items.data?.map((days,key)=>days.date.gregorian.month["en"][key])}</h2>
                
                <select placeholder="Month" id='dropdownMenu' onChange={handleChange}>
                    <option name="" value={month}>Month</option>
                    <option name="January" value="1">January</option>
                    <option name="February" value="2">February</option>
                    <option name="March" value="3">March</option>
                    <option name="April" value="4">April</option>
                    <option name="May" value="5">May</option>
                    <option name="June" value="6">June</option>
                    <option name="July" value="7">July</option>
                    <option name="August" value="8">August</option>
                    <option name="September" value="9">September</option>
                    <option name="October" value="10">October</option>
                    <option name="November" value="11">November</option>
                    <option name="December" value="12">December</option>
                </select>
                
                <table id='monthCalender'>
                    <tr>
                        <th>Date</th>
                        <th>Fajr</th>
                        <th>Dhur</th>
                        <th>Asr</th>
                        <th>Maghrib</th>
                        <th>Ishaa</th>
                    </tr>
                    {items.data?.map((days) =>
                        <tr>
                            <td>
                                <li key={days.date.readable}>{days.date.readable}</li>
                            </td>
                            <td>
                                <li key={days.timings["Fajr"]}>{days.timings["Fajr"]}</li>
                            </td>
                            <td>
                                <li key={days.timings["Dhuhr"]}>{days.timings["Dhuhr"]}</li>
                            </td>
                            <td>
                                <li key={days.timings["Asr"]}>{(days.timings["Asr"])}</li>
                            </td>
                            <td>
                                <li key={days.timings["Maghrib"]}>{days.timings["Maghrib"]}</li>
                            </td>
                            <td>
                                <li key={days.timings["Isha"]}>{days.timings["Isha"]}</li>
                            </td>
                        </tr>
                    )}
                    
                </table>
            </div>
        </Container>
    );
}


const Container = styled.div`
    .table{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        h1 {
            text-align: center;
            font-size: 32px;
            color: white;
            margin-bottom: .5rem;
            margin-top: 2rem;
        }
        h2{
            color: white;
            text-align: center;
            margin-bottom: 2rem;
        }

        #monthCalender{
            border-collapse: collapse;
            width: 80%;
            align-content: center;
            margin-bottom: 20%;
            
            td, th{
                border: 1px solid #ddd;
                padding: 8px;
                color: white;
                font-size: 24px;
                // background-color: white;
            }

            th{
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                color: black;
                background-color: #04AA6D;
            }

            li{
                list-style-type: none;
            }
        }
    }

    select{
        height:30px;
        width: 150px;
        font-size: 24px;
    }

`;