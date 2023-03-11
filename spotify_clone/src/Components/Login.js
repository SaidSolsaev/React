import React from 'react';
import styled from "styled-components";
import spotifylogo from "../Images/Spotify_Logo.png";

export default function Login() {
    const handleClick = () => {
        const clientID = "bc79a40e939c4e44a04721c839b3fdc0";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email", 
            "user-read-private", 
            "user-read-playback-state", 
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
        ]
        window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    }
  return (
    <Container>
        <img src={spotifylogo} alt='Spotify'/>
        <button onClick={handleClick}>Login To Spotify</button>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db954;
    gap: 5rem;
    img{
        height: 20vh;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        background: black;
        color: #49f585;
        font-size: 18px;
        cursor: pointer;
    }
`;
