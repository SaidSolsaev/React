import React from 'react'
import styled from 'styled-components'
import spotifylogo from "../Images/Spotify_Logo_W.png";
import {FiSearch} from "react-icons/fi"
import {MdLibraryMusic, MdHomeFilled} from "react-icons/md"
import Playlist from "./Playlist.js";

export default function SideBar() {
  return (
    <Container>
        <div className="top-links">
          <div className="logo">
            <img src={spotifylogo} alt="Logo" />
          </div>

          <ul>
            <li>
              <MdHomeFilled />
              <span>Home</span>
            </li>
            <li>
              <FiSearch />
              <span>Search</span>
            </li>
            <li>
              <MdLibraryMusic />
              <span>Your Library</span>
            </li>
          </ul>
        </div>
        <Playlist />
    
    </Container>
  )
}



const Container = styled.div`
  
    background-color: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
    .top-links{
      display: flex;
      flex-direction: column;

      .logo{
        text-align: center;
        margin: 1rem 0;

        img{
          max-inline-size: 80%;
          block-size: auto;
        }
      }

      ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        li{
          display: flex;
          gap 1rem;
          cursor: pointer;
          transition: .3s ease-in-out;
          &:hover {
            color:white
          }
        }
      }
    }
`;
