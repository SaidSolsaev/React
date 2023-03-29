import React, {useEffect, useState} from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../utils/firebase-config'
import styled from 'styled-components';


function Home({isAuth}) {
    const [postList, setPostList] = useState([]);
    const postCollectionRef = collection(db, "Posts");

    const deletePost = async (id) =>{
        const postDoc = doc(db, "Posts", id);
        await deleteDoc(postDoc);
    };

    useEffect(() => {
        const getPosts = async () =>{
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
        console.log(postList)
    }, [deletePost]);

   
    return (
        <Container>
            <div className="homePage">
                {postList.map((post) => {
                    return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1> {post.title}</h1>
                            </div>
                            <div className="deletePost">
                                {isAuth && post.author.id === auth.currentUser.uid && (
                                <button onClick={() => {deletePost(post.id);}}>
                                    {" "}
                                    &#128465;
                                </button>
                                )}
                            </div>
                        </div>
                        <div className="postTextContainer"> {post.postText} </div>
                        <h3>@{post.author.name}</h3>
                    </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default Home

const Container = styled.div`
    .homePage {
        width: 100%;
        min-height: calc(100vh - 80px);
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
    }
  
    .homePage .post {
        width: 600px;
        height: auto;
        max-height: 600px;
        background-color: rgb(250, 250, 250);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin: 20px;
        padding: 20px;
        border-radius: 15px;
    }
    
    .post .postHeader {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .postHeader .title {
        flex: 50%;
    }
    .postHeader .deletePost {
        flex: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    
    .deletePost button {
        border: none;
    
        background: none;
        font-size: 30px;
        cursor: pointer;
    }
    
    .post .postTextContainer {
        word-wrap: break-word;
        height: auto;
        max-height: 400px;
        width: 100%;
        overflow: hidden;
        overflow-y: auto;
    }
`;