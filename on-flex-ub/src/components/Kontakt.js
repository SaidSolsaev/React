import React from 'react'
import styled from 'styled-components';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const SERVICE_ID = "service_yd0uc2h";
const TEMPLATE_ID = "template_wfv0tm7";
const USER_ID = "Y4pvRsKGDxZzSm-IL";

export default function Kontakt() {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then((result) => {
            Swal.fire({
                icon: "success",
                title: "Message Sent Successfully!"
            })
        }, (error) => {
            Swal.fire({
                icon: "error",
                title: "Something went wrong. Try again!",
                text: error.text,
            })
        });
        e.target.reset()
    };

    return (
        <Container>
            <div className='kontaktContainer' id='kontakt'>
                <h1>Kontakt Oss</h1>

                <form className='form' onSubmit={handleOnSubmit}>
                    <input type="text" placeholder='Navn...*' required name="user_name"/>
                    <input type="email" placeholder='Email...*' required name="user_email"/>
                    <textarea type="text" placeholder='Melding...*' required name="user_message"/>
                    <button>Send</button>
                </form>

            </div>
        </Container>
    );
};

const Container = styled.div`
    .kontaktContainer{
        height: 100vh;
        background-color: #333;
        

        h1{
            text-align: center;
            color: white;
            font-family: 'Piazzolla', serif;
            font-size: 38px;
        }

        .form{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            top: 40px;

            input{
                width: 50%;
                margin: 1rem;
                height: 30px;
                background: none;
                color: white;
                border: none;
                outline: none;
                border-bottom: 2px solid #bbb;
            }

            textarea{
                margin: 1rem;
                height: 100px;
                width: 50%;
                background: none;
                border: none;
                color: white;
                outline: none;
                resize: none;
                border-bottom: 2px solid #bbb;
            }

            .btnContainer{
                height: 20vh;
                display: flex;
                justify-content: center;
            }

            button{
                background-color: #04AA6D;
                display: inline-block;
                padding: 0.3em 1.2em;
                border:0.16em solid rgba(255,255,255,0);
                border-radius:2em;
                box-sizing: border-box;
                text-decoration:none;
                font-weight:600;
                text-align: center;
                transition: all 0.2s;
                font-size: 18px;
                cursor: pointer;
                margin-right: auto;
                margin-left: auto;
                margin-top: 40px;
                color: white;
                
                
                &:hover{
                    border-color: rgba(255,255,255,1);
                }
            }


        }
    }


    @media (max-width: 500px) {
        .kontaktContainer{
            .form{
                input{
                    width: 80%;
                }
    
                textarea{
                    width: 80%;
                }
            }
        }
    }

`;
