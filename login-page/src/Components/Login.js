import React, { useState } from 'react';
import styled from 'styled-components';

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
                    <button type='submit'>Login</button>
                </form>
                <button className='link-btn' onClick={() => props.onFormSwitch("register")}>Dont't have an account? Register here</button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    .form-container{
        display: flex;
        flex-direction: column;
    }

    .login-form{
        display: flex;
        flex-direction: column;
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
