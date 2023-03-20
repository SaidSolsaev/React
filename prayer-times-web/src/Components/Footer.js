import React from 'react'
import styled from 'styled-components';


const Footer = () => {
  return (
    <Container>
        <footer>
            <p>
                Made by Said Solsaev &copy;
            </p>
        </footer>
    </Container>
  );
}

export default Footer

const Container = styled.div`
    footer {
        padding: 20px 0;
        background-color: #333;
        color: white;
        text-align: center;
    }

`;