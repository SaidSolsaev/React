import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../Utils/StateProvider'
import { reducerCases } from '../Utils/Constants';
import {HiOutlineClock} from "react-icons/hi";
import axios from 'axios';

export default function Body({headerBackground}) {
  const [{token, selectedPlaylist, selectedPlaylistId}, dispatch] = useStateProvider();

  useEffect(() => {
    // console.log(selectedPlaylistId);
    const getInitialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type" : "application/json",
        },
      });
      // console.log(response.data);

      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")? "" : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track}) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
          
        })),
      };
      dispatch({type: reducerCases.SET_PLAYLIST_BODY, selectedPlaylist});
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  const msToMin = (ms) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000)/1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  };

  const playTrack = async (id, name, artists, image, context_uri, track_number) => {
    const response = await axios.put(`https://api.spotify.com/v1/me/player/play`,{
      context_uri,
      offset: {
        position: track_number - 1,
      },
      position_ms: 0,
    }, {
      headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
      },
  });

  if (response.status === 204) {
    const currentlyPlaying = {
      id,
      name,
      artists,
      image,
    };
    dispatch({type: reducerCases.SET_PLAYING, currentlyPlaying});
    dispatch({type: reducerCases.SET_PLAYER_STATE, playerState: true});
  }else dispatch({type: reducerCases.SET_PLAYER_STATE, playerState: true})


  }


  return (
    <Container headerBackground={headerBackground}>
      {selectedPlaylist && (
        <>
          <div className='playlist'>
            <div className='image'>
              <img src={selectedPlaylist.image} alt="playlist" />
            </div>

            <div className='details'>
              <span className='tpye'>Playlist</span>
              <h1 className='title'>{selectedPlaylist.name}</h1>
              <p className='description'>{selectedPlaylist.description}</p>
            </div>
          </div>

          <div className='list'>
            <div className='header-row'>
              <div className='col'>
                <span>#</span>
              </div>
              <div className='col'>
                <span>Title</span>
              </div>
              <div className='col'>
                <span>Album</span>
              </div>
              <div className='col'>
                <span><HiOutlineClock /></span>
              </div>
            </div>

            <div className='tracks'>
              {selectedPlaylist.tracks.map(({
                id, 
                name,
                artists,
                image,
                duration,
                album,
                context_uri,
                track_number
              }, index) => {
                return (
                  <div className='row' key={id} onClick={()=>playTrack(id, name, artists, image, context_uri, track_number)}>
                    <div className='col'>
                      <span>{index+1}</span>
                    </div>
                    <div className='col detail'>
                      <div className='image'>
                        <img src={image} alt="track"/>
                      </div>
                      <div className='info'>
                        <span className='name'>{name}</span>
                        <span>{artists}</span>
                      </div>
                    </div>

                    <div className='col'>
                      <span>{album}</span>
                    </div>
                    <div className='col'>
                      <span>{msToMin(duration)}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
      
    </Container>
  )
}

const Container = styled.div`
  .playlist{
    margin: 0 2rem;
    display: felx;
    align-items: center;
    gap: 2rem;

    .image{
      img{
        height: 15rem;
        box-shadow: rgba(0, 0, 0, .25) 0px 25px 50px -12px;
      }
    }

    .details{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title{
        color: white;
        font-size: 4rem;
      }
    }
  }

  .list{
    .header-row{
      display: grid;
      grid-template-columns: .3fr 3fr 2fr .1fr;
      color: white;
      margin: 1rem 0 0 0;
      position: sticky;
      top: 11.4vh;
      padding: 1rem 3rem;
      transition: .3s ease-in-out;
      background-color: ${({headerBackground}) => headerBackground ? "#000000dc" : "none"};
    }
    .tracks {
      margin: 0 2rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 5rem;
      .row{
        padding: .5rem 1rem;
        display: grid;
        grid-template-columns: .3fr 3.1fr 1.85fr .1fr;
        &:hover{
          background-color: rgba(0, 0, 0, .7);
        }
        .col{
          display: flex;
          align-items: center;
          color: white;
          img{
            heigh: 40px;
          }
        }

        .detail{
          display: flex;
          gap: 1rem;
          .info{
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;
