import React from 'react'
import styled from 'styled-components'

export default function SalahCalender({items, city}) {
  
    return (
        <Container>
            <div name="salahcalender" className='table'>
                <h1>Salah Calender for {city}</h1>
                <h2>{items.data.map((days,key)=>days.date.hijri.month["en"][key])}/{items.data.map((days,key)=>days.date.gregorian.month["en"][key])}</h2>
                <table id='monthCalender'>
                    <tr>
                        <th>Date</th>
                        <th>Fajr</th>
                        <th>Dhur</th>
                        <th>Asr</th>
                        <th>Maghrib</th>
                        <th>Ishaa</th>
                    </tr>
                    {items.data.map((days, key) =>
                        <tr>
                            <td>
                                <li key={key}>{days.date.readable}</li>
                            </td>
                            <td>
                                <li key={key}>{days.timings["Fajr"]}</li>
                            </td>
                            <td>
                                <li key={key}>{days.timings["Dhuhr"]}</li>
                            </td>
                            <td>
                                <li key={key}>{(days.timings["Asr"])}</li>
                            </td>
                            <td>
                                <li key={key}>{days.timings["Maghrib"]}</li>
                            </td>
                            <td>
                                <li key={key}>{days.timings["Isha"]}</li>
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

`;