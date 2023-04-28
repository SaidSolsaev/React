import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import CartProduct from './CartProduct';
import { FaTrashAlt } from 'react-icons/fa';

export default function CartContainer({products}) {
    const [p, setP] = useState([])
    
    useEffect(() => {
        setP(products)
    }, [products])

    function getSum(){
        let sum = 0
        {p.map((ind, x) => {
            return (
                sum += ind.price
            )
        })}
        return sum;
    }

    function deleteAll(){
        products.forEach((prod, ind) => {
            products.pop({prod, title: prod.title, price: prod.price})
        });

        setP([])
        console.log(p)
    }

    return (
        <Container>
            <div className='payment'>
                <div className='name'>
                    <h4>Produkt</h4>
                    <p>Antall</p>
                    <p>Pris</p>
                </div>

                <div className='price'>
                    <article>
                       {p.map((ind, x) => {
                        return (
                            <CartProduct key={x} title={ind.title} price={ind.price} products={products}/>
                        )
                       })}
                    </article>
                    <figure>
                        <div className='last'>

                            <p>Sum</p>
                        </div>
                        <div className='last'>
                            <p>{getSum()}kr</p>
                        </div>
                    </figure>
                    <span className='trash-box' title='delete All'><FaTrashAlt onClick={deleteAll} className='delete-all'/></span>
                </div>
            </div>
            
        </Container>
    )
}

const Container = styled.div`
    .trash-box{
        .delete-all{
            color: red;
            padding: 10px;
            border: 1px solid red;
            border-radius: 10px;
            cursor: pointer;
        
        }

        .delete-all:hover{
            border: 2px solid red;
        }
    }
`;
