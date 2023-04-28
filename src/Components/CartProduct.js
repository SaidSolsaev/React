import React, {useState} from 'react'
import styled from 'styled-components'
import {FaTrashAlt} from "react-icons/fa";

export default function CartProduct({title, price, products, remove}) {
   const [qty, setQty] = useState(1);


   function add(){
    setQty(qty + 1);
   }

   function subs(){
    if (qty !== 1){
        setQty(qty - 1);
    }
   }

   function checkPrice(){
    return qty*price
   }

   
    return (
        <Container>
            <div className='pay'>
                <div>
                    <b>{title}</b>
                    <p>{price}kr</p>
                </div>
                <div className='qty-container'>
                    <button className='subtract' onClick={subs}>-</button>
                    <p className='qty-box'>{qty}</p>
                    <button className='add' onClick={add}>+</button>
                </div>
                <p>{checkPrice()}kr</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
.add{
    background: green;
    font-size: 24px;
    color: white;
  }

  .subtract{
    background: red;
    color: white;
    font-size: 24px;

  }
`;