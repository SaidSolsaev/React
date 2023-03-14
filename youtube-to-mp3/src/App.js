import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Input from './Components/Input';
import Button from './Components/Button';
import { fetch } from './assets/Data/ApiRequest';

function App() {
  const [link, setLink] = useState("");
  const [id, setId] = useState(null);
  const [response, setResponse] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (id){
      const fetchData = () => {
        let interval = setInterval(async function () {
          setDisabled(true);
          const res = await fetch(id);

          if (res.status === 200 && res.data.status === "ok"){
            setDisabled(false);
            setResponse(res.data);
            clearInterval(interval);
          } else if (res.status === 200 && res.data.status === "fail"){
            alert("Invalid link, try with a valid link");
            setDisabled(false);
            clearInterval(interval);
          }
        }, 1000)

      }
      fetchData();
    }

  }, [id]);

  useEffect(() => {
    if (response){
      window.location.href = response.link;
    }
  }, [response]);

  return (
    <Container>
      <div className="App">
        <div className='name'>
          <h2>YOUTUBE TO</h2>
          <h2>MP3 CONVERTER</h2>
        </div>

        <div className='body'>
          <Input value={link} onChange={(e) => {setLink(e.target.value);}} />
          <span>It might take some time to download!</span>
        </div>

        <Button name="Download" onClick={() => {
            const text = link.split("=")[1];
            
            console.log(disabled);


            if (text){
              setId(text);
            }
            // alert(text + link);
            // console.log(text);
            // console.log(link);
        }} disabled={disabled} />
      </div>

    </Container>
  );
}

export default App;


const Container = styled.div`
  background-color: #3e3e42;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  .App{
    height: 75vh;
    width: 25rem;
    border-radius: 30px;
    padding: 3rem 1.5rem;
    background-color: #FF3CAC;
    background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name{
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-size: 32px;
      margin-bottom: 0;
    }
  }

  .body{
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
  }
  
  Button{
    .btn-disabled{
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 600px){
    .App{
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    }
  }
`;