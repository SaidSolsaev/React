import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import VerseTranslationText from './VerseTranslationText';

export default function VerseTranslation({surahNm}) {
    const [translationText, setTranslationText] = useState({});
    const [postsError, setPostsError] = useState("");
    const [postsLoading, setPostsLoading] = useState(false);
    // const [surahNm, setSurahNm] = useState(1);

    const handlePost = async () =>{
        setPostsLoading(true);
        try{
            const result = await axios.get(`http://api.alquran.cloud/v1/surah/${surahNm}/en.asad`);
            setTranslationText(result.data.data);
        } catch (error) {
            setPostsError(error.message || "Unexpected Error!");
        } finally {
            setPostsLoading(false);
        }
    };

    useEffect(() => {
        handlePost();
    }, [surahNm]);
    
    return (
        <Container>
            <div>
                <VerseTranslationText translation={translationText} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    
`;

