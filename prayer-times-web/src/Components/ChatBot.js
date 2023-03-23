import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {RiSendPlane2Fill} from "react-icons/ri";
import logo from "../assets/Images/Islamic-logo.svg"
import axios from 'axios';
import {MdClose} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs";

const responseObj = {
    hello: "Assalamu Aleykum! What can i help you with?", 
    hey: "Assalamu Aleykum! What can i help you with?",
}

export default function ChatBot() {
    const chatBody = document.querySelector(".chat-body");
    const txtInput = document.getElementById("textInp");
    const send = document.querySelector(".send");
    
    const renderUserMessage = () => {
        const userInput = txtInput.value;
        if (userInput !== ""){
            renderMessageEle(userInput, "user");

            setTimeout(() => {
                renderChatbotMessage(userInput)
            }, 1000);
        }
        txtInput.value = "";
    };

    const renderChatbotMessage = (userInput) => {
        const res = getChatbotResponse(userInput)
        renderMessageEle(res);
    }

    const renderMessageEle = (txt, type) => {
        let className = "user-message";
        if (type !== "user"){
            className = "chatbot-message";
        }

        const messageEle = document.createElement("div");
        const txtNode = document.createTextNode(txt);
        messageEle.classList.add(className);
        messageEle.append(txtNode);
        chatBody.append(messageEle);
    };

    const getChatbotResponse = (userInput) => {
        return responseObj[userInput] == undefined
        ? "Please try something else"
        : responseObj[userInput];
    };
    
    
    const [response, setResponse] = useState("");
    const [question, setQuestion] = useState("What is Islam");
    
    const options = {
        method: 'GET',
        url: 'https://islam-ai-api.p.rapidapi.com/api/bot',
        params: {question: {question}},
        headers: {
          'X-RapidAPI-Key': '932f580819mshc2a12bc0fcf26a8p182823jsna90e818ded0c',
          'X-RapidAPI-Host': 'islam-ai-api.p.rapidapi.com'
        }
    };

    const handleBotResponse = async () =>{
        try{
            const result = await axios.request(options.url, options);
            setResponse(result.data);
        } catch (error) {
            console.log(error.message || "Unexpected Error!");
        } 
    };

    // console.log(response);

    // useEffect(() => {
    //     handleBotResponse();
    // }, [question]);

    const [show, toggleShow] = useState(false);

    const handleCloseClick = () =>{
        toggleShow(false);
    };

    const handleOpenClick = () =>{
        toggleShow(true);
    };

    console.log(show);

    
    return (
        <Container>
            {show? (
                <div className='chatbox-container'>    
                    <div className='chat-box'>
                        <div className='chat-header'>
                            <div className='logo'>
                                <img src={logo} alt='logo' />
                            </div>
                            <div className='title'>Ask me something about Islam</div>
                            <div className='closeIcon'><MdClose size={28} onClick={handleCloseClick}/></div>
                        </div>
                        <div className='chat-body'></div>
                        <div className='chat-input'>
                            <div className='input-sec'>
                                <input type="text" id='textInp' placeholder='Type here...' autoFocus/>
                            </div>
                            <div className='send'>
                                <RiSendPlane2Fill onClick={renderUserMessage} size={24}/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='chatbox-container'>
                    <div className='open-box'>
                        <button onClick={handleOpenClick}><BsFillChatDotsFill size={42} color="white" /></button>
                    </div>
                </div>
            )}
        </Container>
    );
};




const Container = styled.div`
    .chatbox-container{
        background-color: red;
        
        transform: translateX(0)
    }

    .chat-box{
        --light-color: #fff;
        height: 420px;
        width: 400px;
        background: var(--light-color);
        position: fixed;
        bottom: 10px;
        right: 20px;
        box-shadow: 0px 0px 10px 0px red;
        border-radius: 10px 10px 10px 10px;
    }

    .open-box{
        position: fixed;
        bottom: 10px;
        right: 10px;

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
            &:hover{
                border-color: rgba(255,255,255,1);
            }
        }
    }
    
    .chat-header{
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0px 10px;
        background-color: rgb(4, 170, 109);
        color: var(--light-color);
        font-size: 1.5rem;
        border-radius: 10px 10px 0px 0px;


        .logo{
            height: 55px;
            width: 55px;
        }
    
        img{
            width: 100%;
            height: 100%;
        }

        .title{
            padding-left: 20px;
            font-size: 18px;
        }

        .closeIcon{
            padding-left: 30px;
            margin-top: 6px;
        }
    }

    .chat-body{
        height: 300px;
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 8px 10px;
        border-bottom: 2px solid #ccc;
        overflow-y: auto;

        .user-message{
            padding: 8px;
            background: #ccc;
            align-self: flex-start;
            margin: 5px;
            // width: max-content;
            border-radius: 10px 10px 10px 3px;
        }

        .chatbot-message{
            padding: 8px;
            align-self: flex-end;
            background: rgb(4, 170, 109);
            margin: 5px;
            // margin-right:
            // width: max-content;
            border-radius: 10px 10px 3px 10px;
        }
    }

    .chat-input{
        height: 60px;
        display: flex;
        align-items: center;

        .input-sec{
            flex: 9;
        }

        .send{
            flex: 1;
            padding-right: 4px;
        }

        #textInp{
            line-height: 30px;
            padding: 8px 10px;
            border: none;
            outline: none;
            caret-color: black;
            font-size: 1rem;
            width: 100%;
        }
    }

    
`;
