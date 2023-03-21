import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function VerseAudio({surahNm}) {

    const useAudio = url => {
        const [audio, setAudio] = useState(new Audio(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3`));
        const [playing, setPlaying] = useState(false);
        
        const toggle = () => setPlaying(!playing);
        
        useEffect(() => {
            playing ? audio.play() : audio.pause();
        }, [playing]);

        useEffect(() => {
            audio.addEventListener("ended", () => setPlaying(false));
            return () => {
                audio.removeEventListener("ended", () => setPlaying(false));
            };
        }, []);

        useEffect(() => {
            setAudio(new Audio(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNm}.mp3`))
        }, [surahNm])
        
        return [playing, toggle]
    }

    


    const [playing, toggle] = useAudio();


    // const handleAudio = async () =>{
    //     setPostsLoading(true);
    //     try{
    //         const result = await axios.get(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/1.mp3`);
    //         setAudio(result);
    //     } catch (error) {
    //         setPostsError(error.message || "Unexpected Error!");
    //     } finally {
    //         setPostsLoading(false);
    //     }
    // };
  
  
    return (
        <div>
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};
