import React from 'react'
import styled from 'styled-components';

export default function VerseTranslationText({translation}) {

    return (

        <Container>
            <div className='verseContainer'>
                {translation.ayahs?.map((ayah) =>{
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
            font-size: 22px;
            font-weight: 400;
            text-align: left;
            padding: .4rem;
            margin-right: 0;
        }
}
`;
