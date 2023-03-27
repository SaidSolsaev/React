import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase-config';


export default function Navbar({isAuth, setIsAuth}) {
    const navigate = useNavigate();
    
    const signOutUser = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false)
            navigate("/login");
        })
    };

    return (
        <Container>
            <nav>
                {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signOutUser}>Log out</button>}
                <Link to="/">Home</Link>
                <Link to="/createpost">Create Post</Link>
            </nav>
        </Container>
    );
};

const Container = styled.div`
    nav{
        margin: 0;
        width: 100%;
        height: 80px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
    }

    a{
        color: white;
        text-decoration: none;
        margin: 10px;
        font-size: 25px;
    }
`;
