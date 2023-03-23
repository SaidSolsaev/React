import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
   
    return (
        <Container>
            <nav className='container'>
                <a href='/'>
                    OnFlex UB
                </a>
                
                {/* <div className='navLinks'>
                    <ul>

                    </ul>
                </div> */}
            </nav>
        </Container>
    );
};

const Container = styled.div`
    background-color: #333;
    // display: flex;
    
    
    .container{
        height: 7vh;
        display: flex;
        width: 100%;
        position: relative;

        a{
            align-self: center;
            cursor: pointer;
            margin-left: 25px;
            font-size: 32px;
            margin-top: 25px;
            text-decoration: none;
            color: white;
            font-weight: 800;
        }
        
        .navLinks{
            align-self: center;
            flex: flex-end;
            width: 200px;
        }
    }

    

    
    

`;



