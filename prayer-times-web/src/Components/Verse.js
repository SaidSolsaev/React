import React from 'react'
import styled from 'styled-components'
import Quran from './Quran';


export default function Verse({verse}) {
    if (verse) {
        console.log(verse.ayahs?.map((ayah) => ayah.text));
    }

    
    return (
        <Container>
            <div className='surahContainer'>
                
                
                <div className='verseContainer'>
                    {verse.ayahs?.map((ayah) =>{
                        return (
                            <li key={ayah.text}>{ayah.text}</li>
                        )})}
                </div>
            </div>
        </Container>
    );
};


const Container = styled.div`
    .surahContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        min-height: 100vh;
        width: 100%;
        positon: relative;
        flex-direction: column;
    }

    

    .verseContainer{
        align-items: center;

        li{
            color: white;
            list-style-type: none;
            font-size: 32px;
            font-weight: 600;
        }
    }

`;


