import React, {useEffect} from 'react'
import {useStateProvider} from "../Utils/StateProvider";
import axios from "axios";
import { reducerCases } from '../Utils/Constants';
import styled from 'styled-components';

export default function Playlist() {
    const [{token, playlists}, dispatch] = useStateProvider();

    useEffect(() => {
        // const getPlaylist = async() => {

        // }

        const getPlaylistData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            // console.log(response);
            const {items} = response.data;
            const playlists = items.map(({name, id}) =>{
                return {name, id};
            });
            dispatch({type: reducerCases.SET_PLAYLIST, playlists});
            // console.log(playlists);
        };
        getPlaylistData();

    }, [token, dispatch]);

    const changeCurrPlaylist = (selectedPlaylistId) => {
        dispatch({type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId});
    };

  return (
    <Container>
        <div>
            <ul>
                {playlists.map(({name, id}) => {
                    return(
                        <li key={id} onClick={() => changeCurrPlaylist(id)}>
                            {name}
                        </li>
                    );
                })}
            </ul>
        </div>
    </Container>
  );
};

const Container = styled.div`
    height : 100%;
    overflow: hidden;


    ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height: 52vh;
        max-height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: .7rem;
            &-thumb {
                background-color: rgba(255,255,255, .6);
            }
        }
        li{
        display: flex;
        gap 1rem;
        cursor: pointer;
        transition: .3s ease-in-out;
        &:hover {
            color:white
        }
        }
`;