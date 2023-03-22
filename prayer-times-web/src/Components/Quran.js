import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Verse from './Verse';
import VerseAudio from './VerseAudio';
import VerseTranslation from './VerseTranslation';

export default function Quran() {
    const [quranText, setQuranText] = useState({});
    const [edition, setEdition] = useState("en.asad");
    const [postsError, setPostsError] = useState("");
    const [postsLoading, setPostsLoading] = useState(false);
    const [surahNm, setSurahNm] = useState(1);
    const [translation, setTranslation] = useState(false)
    

    const handleFindSurah = () =>{
        let surahNm = document.getElementById("surahSearchInp").value;
        
        if (surahNm !== "" && surahNm <= 114 && surahNm >= 1){
            setSurahNm(surahNm);
        
        }
        else if (surahNm > 114 || surahNm < 1){
            alert("There are only 114 surahs in the Quran")
        }
        else{
            alert("Fill in the inputs!")
        }

        document.getElementById("surahSearchInp").value = "";
        
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
    }, [surahNm]);

    const handleTClick = () =>{
        translation ? setTranslation(false) : setTranslation(true)
        
    };

    // if (quranText) {
    //     console.log(quranText);
    // }
    
    console.log(translation)

    return (
        <Container>
            <div className='container'>
                {postsLoading && <p>Quran verse is loading</p>}
                {/* {postsError && <p>{postsError}</p>} */}

                <div className='searchContainer'>
                    <input id='surahSearchInp' placeholder='Surah number(1-114)...'/>
                    <button className='searchBtn' onClick={handleFindSurah}>Search</button>
                </div>

                <div className='verseDiv'>
                    <h2 className='verseInfoText'>{quranText.englishName} - {quranText.name}</h2>
                    <h3>Surah Number: {quranText.number}</h3>
                </div>
                
                <div>
                    <VerseAudio surahNm={surahNm} />
                    <button className='translationBtn' onClick={handleTClick}>{translation? "Arabic" :"English Translation"}</button>
                </div>
            
                <div className='surahContainer'>     
                    {/* <VerseTranslation surahNm={surahNm} /> */}
                    {translation ? <VerseTranslation surahNm={surahNm} /> : <Verse verse={quranText}/> }
                    
                </div>
            </div>

        </Container>
    );
};


const Container = styled.div`
    .container{
        width: 100%;
        positon: relative;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
    }

    .verseDiv{
        padding: 1rem;

        .verseInfoText{
            color: white;
            font-size: 24px;
        }
        h3{
            color: white;
            text-align: center;
            margin-top: .5rem;
        }
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
            background: none;
            border: none;
            border-bottom: 2px solid white;
            width: 20%;
            outline: none;
            color: white;
            padding: 0.4rem 0.1rem;
            margin-bottom: 1rem;
            &::placeholder{
                color: rgba(255,255,255,0.6);    
            }
        }
    }

    .surahContainer{
        display: flex;
        // justify-content: cover;
        width:100%;
        positon: relative;
        flex-direction: column;
        background-color: black;
    }

    .searchBtn{
        background-color: #04AA6D;
        display: inline-block;
        padding: 0.3em 1.2em;
        margin-top: .2rem;
        border:0.16em solid rgba(255,255,255,0);
        border-radius:2em;
        box-sizing: border-box;
        text-decoration:none;
        font-weight:600;
        text-align: center;
        transition: all 0.2s;
        font-size: 18px;
        cursor: pointer;
        
        &:hover{
            border-color: rgba(255,255,255,1);
        }
    }

    .translationBtn{
        background-color: #04AA6D;
        display: inline-block;
        padding: 0.3em 1.2em;
        border:0.16em solid rgba(255,255,255,0);
        border-radius:2em;
        box-sizing: border-box;
        font-weight:600;
        text-align: center;
        transition: all 0.2s;
        font-size: 18px;
        cursor: pointer;
        margin-bottom: .5rem;
        
        &:hover{
            border-color: rgba(255,255,255,1);
        }
    }
    
`;