import React from 'react'
import styled from 'styled-components'


export default function Button({name, onClick, disabled}) {
  return (
    <Container>
        <button onClick={onClick} disabled={disabled} className={disabled ? "btn-disabled" : "button"}>{name}</button>
    </Container>
  );
}

const Container = styled.div`
    .button{
        background-color: #90EE90;
        border: none;
        width: 100%;
        border-radius: 30px;
        font-size: 24px;
        height: 3rem;
        box-shadow: 0px 5px 8px 3px rgba(0,0,0,0.8);
        cursor: pointer;
        transition: .2s ease-in-out;
        &:hover{
            box-shadow: 0px 5px 15px 5px rgba(0,0,0,1);
        }

        
    }
    .btn-disabled{
        opacity: 0.5;
        cursor: wait;
        box-shadow: 0px 5px 8px 3px rgba(0,0,0,0.8);
        background-color: #90EE90;
        border: none;
        width: 100%;
        border-radius: 30px;
        font-size: 24px;
        height: 3rem;
    }
`;
