import React, { useState } from 'react'
import styled from 'styled-components'

export default function Register(props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <Container>
            <div className='form-container'>
                <h2>Register</h2>

                <form className='register-form' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Full Name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder='Full Name' required />
                    <label htmlFor='email'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your@Email.com' required id='email' name='email'/>
                    <label htmlFor='password'>Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' required id='pass' name='password'/>
                    <button type='submit'>Register</button>
                </form>
                <button className='link-btn' onClick={() => props.onFormSwitch("login")}>Already have an account? Login here</button>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .form-container{
        display: flex;
        flex-direction: column;
    }

    .register-form{
        display: flex;
        flex-direction: column;
        // align-items: center;
    }

    label{
        text-align: left;
        padding: 0.25rem 0;
        
    }

    input{
        align-self: center;
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
