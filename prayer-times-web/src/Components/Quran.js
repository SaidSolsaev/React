import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Quran() {
    const [quranText, setQuranText] = useState({});
    const [edition, setEdition] = useState("en.asad");
    const [postsError, setPostsError] = useState("");
    const [postsLoading, setPostsLoading] = useState(false);

    useEffect(() => {
        handlePost();
    }, []);

    const handlePost = async () =>{
        setPostsLoading(true);
        try{

            const result = await axios.get(`http://api.alquran.cloud/v1/quran/quran-uthmani`);
            setQuranText(result.data.data);
        } catch (error) {
            setPostsError(error.message || "Unexpected Error!");
        } finally {
            setPostsLoading(false);
        }
    };

    // if (quranText) {
    //     console.log(quranText.surahs);
    // }

    // console.log(postsLoading)
    

    return (
        <Container>
            <div className='container'>
                {postsLoading && <p>Quran verse is loading</p>}
                {postsError && <p>{postsError}</p>}
                
                <div className='verseContainer'>
                    {quranText.surahs?.map((post,index) =>{
                        return (
                            <div className='grid'>
                                <li key={post.text}>{post.englishName + " " + post.name}</li>
                            </div>
                        )})}
                </div>
                
         
            </div>

        </Container>
    );
};


const Container = styled.div`
    .container{
        color: white;
        height: 400vh;
        position: relative;
    }

    .verseContainer{
        // height: 100px;
        display: flex;
        background-color: red;
        border: 1px solid white;
    }

    .grid{
        display: grid;
        border: 1px solid white;
        grid-rows: 3;
        border: 1px solid white;
    }
`;