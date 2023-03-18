import styled from "styled-components"
import React, {useState, useEffect} from 'react'

export default function Header({items, today, city, setCity}) {
  console.log(items.data.map((days) => days)
  )
    return (
        <Container>
            <div className="dates">
                <h3>
                    Salah Times Today:
                    <span lang="en">
                        {` ` + items.data[today -1].date.readable}
                    </span>
                </h3>

                <div className="header">
                Asr
                    {items.data.map((days, key) =>
                        <div className="times">
                            <li key={key}>{days.timings["Fajr"]}</li>
                            <li key={key}>{days.timings["Asr"]}</li>
                        </div>
                        
                    
                    )}
                </div>

                <h3>
                    <span>
                        {items.data[today - 1].date.gregorian.weekday["en"]}
                    </span>
                </h3>

            </div>
        </Container>

    )
};


const Container = styled.div`
    .header{
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style-type: none;

        li{
            display: block;
        }
    }

    

`;