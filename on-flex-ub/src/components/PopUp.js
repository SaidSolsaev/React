import React, { useState } from 'react'
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {AiOutlineClose} from "react-icons/ai";



export default function () {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <Container>
            <button onClick={() => setIsOpen(true)}>Sjekk ut produktet vårt!</button>
            {isOpen ? (
                <div className='main'>
                    <div className='popup'>
                        <div className='closeTab'>
                            <span><AiOutlineClose size={28} onClick={() => setIsOpen(false)} /></span>
                        </div>
                        <div className='popup-header'>
                            <h1>Prouktet kommer snart</h1>
                            <h2>Tusen takk for forståelsen og Tålmodigheten</h2>
                        </div>
                        <div className='popup-text'>
                            
                        </div>
                    </div>

                </div>
            ) : (
                null
            )}
        </Container>
    );
}

const Container = styled.div`
    text-align: center;
    display: flex;
    padding-top: 150px;

    button{
        background-color: #04AA6D;
        display: inline-block;
        padding: 0.3em 1.2em;
        border:0.16em solid rgba(255,255,255,0);
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-weight:600;
        text-align: center;
        transition: all 0.2s;
        font-size: 18px;
        cursor: pointer;
        margin-right: auto;
        margin-left: auto;
        color: white;
        
        
        &:hover{
            border-color: rgba(255,255,255,1);
        }
    }

    .popup{
        height: 500px;
        width: 50%;
        background-color: #8FBC8F;
        top: 25%;
        position: fixed;
        right: 25%;
        display: flex;
        flex-direction: column;
    }

    .closeTab{
        width: 30px;
        margin-left: auto;    
        cursor: pointer;
    }

    .popup-header{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 200px 30px 0 15px;
        align-items: center;
    }

    @media (max-width: 500px){
        padding-top: 100px;
        justify-content: center;

        .popup{
            width: 80%;
            left: 10%;
        }


        .popup-header{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 100px 30px 0 15px;
            align-items: center;
        }

        button{
            color: white;
        }
    
    }

    
    

`;
