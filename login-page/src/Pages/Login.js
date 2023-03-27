import React, { useState } from 'react';
import styled from 'styled-components';
import {auth, provider} from "../utils/firebase-config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth}) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider).then((result) =>{
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
            navigate("/")
        });
    };
    
    return (
        <Container>
            <div className='form-container'>
                <h2>Login</h2>

                <form className='login-form' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your@Email.com' required id='email' name='email'/>
                    <label htmlFor='password'>Password</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your@Email.com' required id='email' name='email'/>
                    <div className='login-btns'>
                        <button type='submit'>Login</button>
                        <button className='login-google' onClick={signInWithGoogle}>Sign in with Google</button>
                    </div>
                </form>
                {/* <button className='link-btn' onClick={() => props.onFormSwitch("register")}>Dont't have an account? Register here</button> */}
            </div>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    .form-container{
        display: flex;
        flex-direction: column;
    }
    
    .login-form{
        display: flex;
        flex-direction: column;
    }

    .login-btns{
        display: flex;
        justify-content: center;
    }

    label{
        text-align: left;
        padding: 0.25rem 0;
    }

    input{
        margin: .5rem 0;
        padding: 1rem;
        border: none;
        border-radius: 10px;
    }

    button{
        border: none;
        background-color: white;
        padding: 20px;
        width: 170px;
        border-radius: 10px;
        cursor: pointer;
        color: #7439db
    }

    .link-btn{
        background: none;
        color: white;
        text-decoration: underline;
    }

    @media screen and (min-width: 600px) {
        .form-container {
            padding: 5rem;
            border: 1px solid white;
            border-radius: 10px;
            margin: 0.5rem;
        }
    }



`;
