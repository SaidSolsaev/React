import React from 'react'
import styled from "styled-components";

export default function Input({value, onChange}) {

  return (
    <Container>
        <input type="text" placeholder='Youtube URL here...' value={value} onChange={onChange}/>
    </Container>
  );
}


const Container = styled.div`
    input{
        background: none;
        border: none;
        border-bottom: 2px solid black;
        width: 22rem;
        outline: none;
        color: white;
        padding: 0.4rem 0.1rem;
        &::placeholder{
            color: rgba(255,255,255,0.6);
        }
    }
`;
