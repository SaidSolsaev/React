import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Footer from './Footer';
import NavBar from './NavBar';
import SideBar from './SideBar';

export default function Spotify() {
  return (
    <Container>
        <div className='spotify-body'>
            <SideBar />
            <div className='body'>
                <NavBar />
                <div className='body-components'>
                    <Body />
                </div>
            </div>
        </div>
        
        <div className='spotify-footer'>
            <Footer />
        </div>
    </Container>
  )
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;

    .spotify-body{
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,1));
        background-color: rgb(32,87, 100);
        .body{
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
`;
