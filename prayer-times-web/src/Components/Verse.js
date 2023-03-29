import React from 'react'
import styled from 'styled-components'


export default function Verse({verse}) {
    
    return (
        <Container>
                <div className='verseContainer'>
                    {verse.ayahs?.map((ayah) =>{
                        return (
                            <li key={ayah.txt}>{ayah.text}</li>
                        )})}
                </div>
            
        </Container>
    );
};


const Container = styled.div`
    

    .verseContainer{
        
        li{
            color: white;
            list-style-type: none;
            font-size: 32px;
            font-weight: 600;
            text-align: right;
            padding: .7rem;
            margin-right: 0;
        }
    }

`;


