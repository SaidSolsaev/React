import React from 'react'
import styled from 'styled-components'
import PopUp from './PopUp';

export default function LandingPage() {
  
    return (

        <Container>
            <div className='welcome-card'>
                <div className='heading-text'> 
                    <h1>Bli sett. Bruk Refleks</h1>
                    <h3>Stay safe with style</h3>
                    <p>Vi i OnFlex UB har en visjon om at alle bruker reflekser når det er mørkt slik at vi sammen holder oss trygge i trafikken</p>
                </div>

            </div>

            <div className='image-card'>
                <div className='image-container'>
                    <img />
                    Bilde av refleks (eksempel)
                </div>
            </div>

            <div className='continueBtn'>
                <PopUp />
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 100vh;
    background-color: #333;
    display: flex;
    flex-direction: flex-column;
    justify-content: center;

    .welcome-card{
        align-self: center;
        height: 30vh;
        display: flex;
        flex-direction: column;
        width: 500px;

        .heading-text{
            text-align: center;

            h1{
                color: white;
                font-size: 38px;
            }

            h3{
                color: white;
                font-size: 28px;
            }

            p{
                font-size: 22px;
                margin-top: 4rem;
                color: #bbb;
            }
        }
    }


    .image-card{
        align-self: center;
        margin-left: 2rem;
        width: 300px;
        height: 50vh;
        background-color: white;
        border-radius: 15%;

        .image-container{
            text-align: center;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        
        .welcome-card {
            
            width: 300px;
            align-self: center;

            .heading-text{
                padding-top: 50px;
                text-align: center;
                align-self: center;

                h1{
                    color: white;
                    font-size: 28px;
                }
    
                h3{
                    color: white;
                    font-size: 22px;
                }
    
                p{
                    font-size: 18px;
                    margin-top: 4rem;
                    color: #bbb;
                }
            }

        }

        .image-card{
            align-self: center;
            margin-left: 0;
            width: 300px;
            height: 50vh;
            background-color: white;
            margin-top: 70px;
    
            .image-container{
                text-align: center;
            }

        }

    }
`;



