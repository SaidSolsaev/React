import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Verse from './Verse';

export default function Quran() {
    const [quranText, setQuranText] = useState({});
    const [edition, setEdition] = useState("en.asad");
    const [postsError, setPostsError] = useState("");
    const [postsLoading, setPostsLoading] = useState(false);
    const [surahNm, setSurahNm] = useState(113);

    const handleFindSurah = () =>{
        let surahNm = document.getElementById("surahSearchInp").value;
        
        if (surahNm !== ""){
            setSurahNm(surahNm);
        }else{
            alert("Fill in the inputs!")
        }
    }

    const handlePost = async () =>{
        setPostsLoading(true);
        try{
            const result = await axios.get(`http://api.alquran.cloud/v1/surah/${surahNm}`);
            setQuranText(result.data.data);
        } catch (error) {
            setPostsError(error.message || "Unexpected Error!");
        } finally {
            setPostsLoading(false);
        }
    };

    useEffect(() => {
        handlePost();
    }, []);


    // if (quranText) {
    //     console.log(quranText);
    // }

    

    // console.log(postsLoading)
    

    return (
        <Container>
            <div className='container'>
                {postsLoading && <p>Quran verse is loading</p>}
                {postsError && <p>{postsError}</p>}

                <div className='searchContainer'>
                    <input id='surahSearchInp' placeholder='Search Surah number(example 112)...'/>
                    <button onClick={handleFindSurah}>Search</button>
                    <h2>{surahNm}</h2>
                </div>
            
                <div className='surahContainer'>

                    <Verse verse={quranText}/>
                </div>
                
            </div>

        </Container>
    );
};


const Container = styled.div`
    .container{
        width: 100%;
        positon: relative;
        align-self: center;
        margin: auto;
        padding: 2rem;
        display: flex;
        min-height: 100vh;
        align-items: center;
        flex-direction: column;
    }

    .searchContainer{
        height: 100px;
        width: 80%;
        margin-right: auto;
        margin-left: auto;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        input{
            width: 40%;
        }
    }

    .surahContainer{
        // display: flex;
        // flex-direction: column;
        align-items: right;
        justify-content: center;
        position: relative;
        // min-height: 100vh;
        width: 100%;
        positon: relative;
        flex-direction: column;
    }

    

    

    
`;