import React, {useState} from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
    const [navState, setNavState] = useState(false);
    
   
    return (
        <Container>
            <nav className='container'>
                <div className='logo'>
                    <a href='/'>
                        OnFlex UB
                    </a>
                </div>

                <div className='toggle'>
                    {navState ? (
                        <GrClose color='white' size={32} onClick={() => setNavState(false)} />
                    ): (
                        <GiHamburgerMenu color='white' size={32} onClick={() => setNavState(true)} />
                    )}
                </div>
                
                <div className={`links ${navState ? "show" : "hide"}`}>
                    <ul>
                        <li><a href='#Team'>Teamet</a></li>
                        <li><a href='#kontakt'>Kontakt Oss</a></li>                  
                    </ul>
                </div>
                

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

        .toggle{
            display: none;
        }

        .logo{
            justify-content: center;
            align-items: center;
            
            a{
                align-self: center;
                cursor: pointer;
                margin: 25px;
                font-size: 32px;
                text-decoration: none;
                color: white;
                font-weight: 800;
            }
        }

        .links{
            display: flex;
            align-items: center;
            
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
        }
    }
    
    

    
    @media screen and (max-width: 650px) {
        .container{
            .links{
                position: absolute;
                background-color: #333;
                flex-direction: column;
                margin-top: 6rem;
                width: 100vw;
                padding: 5rem 0;
                transition: 0.6s ease-in-out;
                gap: 2rem;
                ul {
                    flex-direction: column;
                    gap: 1.5rem;
                }
            }
            .show {
                top: 0;
            }
            
            .hide {
                top: -600px;
            }

            .toggle{
                display: block;
                svg{
                    margin-top: 10px;
                    margin-right: 10px;
                    
                }
            }
            
            .logo{
                align-items: center;

                a{
                    margin-left: 0;
                }
            }
        }
    }

`;



