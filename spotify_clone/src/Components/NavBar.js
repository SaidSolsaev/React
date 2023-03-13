import React from 'react'
import styled from 'styled-components'
import {FaSearch} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import { useStateProvider } from '../Utils/StateProvider';



export default function NavBar({navBackground}) {
  const [{userInfo}] = useStateProvider();

  return (
    <Container navBackground={navBackground}>
      <div className='search-bar'>
        <FaSearch />
        <input type="text" placeholder='Songs, Artists or Podcasts...' />
      </div>
      
      <div className='profile'>
        <a href='https://open.spotify.com/user/said095'>
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 5vh;
  position: sticky;
  top: 0;
  transition: .3s ease-in-out;
  background-color: ${({navBackground}) => navBackground ? "#000000dc" : "none"};

  .search-bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }

  .profile {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      height: 25px;
      text-decoration: none;
      color: white;
      font-weight: bold;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }

`;
