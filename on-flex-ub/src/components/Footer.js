import React from 'react'
import styled from 'styled-components';


export default function Footer() {
    return (
        <Container>
            <div className='container'>
                <div className='footer-text'>
                    <h3>Created by Said Solsaev &copy;</h3>
                    <h4><a href='https://github.com/SaidSolsaev' target="_blank">Klikk her for flere prosjekter</a></h4>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    height: 10vh;
    background-color: #333;

    .container{
        background-color: #333;
        text-align: center;
        // display: flex;
        text-align: center;
        width: 100%;

        h3{
            color: white;
            font-size: 16px;
            margin-bottom: 20px;
        }
        
        a{
            text-decoration: none;
            color: #bbb;
        }

        .footer-text{
            border-top: 1px solid #bbb;
            padding-top: 20px;
        }
    }
`;
