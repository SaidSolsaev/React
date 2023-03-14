import React, {useState} from 'react';
import styled from "styled-components";


export default function Counter() {
  let [countnum, setCount] = useState(0);

  const increaseValue = () =>{
    setCount((countnum += 1));
  }

  const decreaseValue = () =>{
    if (countnum === 0) {
      alert("Den er allerede på 0, ikke tell bakover")
    } else {
      setCount((countnum -=1));
    }
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <Container>
      <div>
        Counter
        <div className='counter'>
          <div className='countertekst'>{countnum}</div>
          <div className='buttons'>
            <button onClick={increaseValue}>+</button>
            <button onClick={resetValue}>Reset</button>
            <button onClick={decreaseValue}>-</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  display: flex;
  flexDirection: column;
  // align-items: center;
  justify-content: center;
  font-size: 600%;
  width: 100%;
  height: 100%;
  top: 0%;
  height: 1600px;
  color: white;
  .header-tekst{
    color: white;
  }

  .counter{
    background-color: green;
    height: 400px;
    width: 400px;
    position: relative;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button{
      font-size: 60%;
      position: relative;
      bottom: 5vh;
      margin-right: 10px;
      border-radius: 25%;
      color: black;
      align-items: center;
    }
  }

  .countertekst{
    color: white;
    position: relative;
    top: 5vh;
    font-size: 120%;
  }

`;
