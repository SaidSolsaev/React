import React, { useState } from 'react'
import styled from 'styled-components';
import {AiOutlineArrowUp} from "react-icons/ai";


export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
        window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
    
    return (
        <Container>
            <a href='#home' className={`${visible ? "block" : "none"}`}>
                <AiOutlineArrowUp color='white'/>
            </a>
        </Container>
    );
};

const Container = styled.div`
    .none{
        opacity: 0;
        visiblity: hidden;
    }
    
    a{
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: var(--primary-color);
        padding: 1rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s ease-in-out;
        z-index: 1;
        svg {
            color: black;
            font-size: 1.3rem;
        }
    }
`;
