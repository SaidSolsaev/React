import React, {useState, useEffect} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../utils/firebase-config'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function CreatePost({isAuth}) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    
    const postCollectionRef = collection(db, "Posts");
    const navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postCollectionRef, {
            title,
            postText,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
        });
        navigate("/");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("login")
        };
    }, []);
    
    return (
        <Container>
            <div className="createPostPage">
                <div className="cpContainer">
                    <h1>Create A Post</h1>
                    <div className="inputGp">
                        <label> Title:</label>
                        <input
                        placeholder="Title..."
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        />
                    </div>
                    <div className="inputGp">
                        <label> Post:</label>
                        <textarea
                        placeholder="Post..."
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                        />
                    </div>
                    <button onClick={createPost}> Submit Post</button>
                </div>
            </div>
        </Container>
    )
}

export default CreatePost


const Container = styled.div`
    .createPostPage {
        width: 100%;
        height: calc(100vh - 80px);
        display: grid;
        place-items: center;
    }
    
    .cpContainer {
        width: 500px;
        height: auto;
        padding: 20px;
        background-color: black;
        border-radius: 12px;
        color: white;
        display: flex;
        flex-direction: column;
    }
    
    .cpContainer h1 {
        text-align: center;
    }
    
    .cpContainer label {
        font-size: 25px;
    }
    .cpContainer .inputGp {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }
    
    .inputGp input,
    .inputGp textarea {
        font-size: 18px;
        border: none;
        border-radius: 2px;
        padding: 5px;
    }
    
    .inputGp input {
        height: 40px;
    }
    .inputGp textarea {
        height: 150px;
    }
    
    .cpContainer button {
        margin-top: 20px;
        height: 40px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
    }
  
    input,
    textarea {
        margin-top: 5px;
    }

`;