import React from 'react'
import styled from 'styled-components'


export default function Navbar() {
    
   
    return (
        <Container>
            <nav className='container'>
                <div className='logo'>
                    <a href='/'>
                        OnFlex UB
                    </a>

                </div>

                <ul className='menu'>
                    <li><a href='#Team'>Teamet</a></li>
                    <li><a href='#kontakt'>Kontakt Oss</a></li>                  
                </ul>
                
            </nav>
        </Container>
    );
};

const Container = styled.div`
    background-color: #333;
   
    .container{
        height: 7vh;
        display: flex;
        width: 100%;
        position: relative;
        justify-content: space-between;

        .logo{
            justify-content: center;
            align-items: center;
            a{
                align-self: center;
                cursor: pointer;
                margin-left: 25px;
                font-size: 32px;
                text-decoration: none;
                color: white;
                font-weight: 800;
            }
        }

        ul{
            display: flex;
            align-items: center;
            margin-right: 20px;

            li{
                list-style-type: none;
            }

            a{
                align-self: center;
                cursor: pointer;
                margin-left: 25px;
                font-size: 24px;
                text-decoration: none;
                color: white;
                font-weight: 400;

                &:hover{
                    border-bottom: 2px solid rgb(4, 170, 109);
                }
            }
            
        }

        .asd{
            display: none;
        }
    }

    
    @media screen and (max-width: 650px) {
        .container{
            ul{
                display: none;
            }
        }
    }

`;



