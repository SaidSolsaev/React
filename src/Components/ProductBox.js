import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { productArr } from '../data/Cart';


const notify = () => {
    toast.success("Produkt har blitt lagt til i lista",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}


export default function ProductBox({imgSrc, title, price, handleSetProduct}) {
    
    const setProductHandler = () => {
        productArr.push({title, price})
        {handleSetProduct()}
        notify()
    }

   
    
    return (
        <div className='details'>
            <img src={imgSrc} alt='product' className='details-img'/>
            <div className='food-name'>
                <h2>{title}</h2>
            </div>
            
            <div className='food-details'>
                <div>
                    <p>Pris: {price}</p>
                    <p>Tilgjengelig</p>
                </div>
            </div>

            <div className='cart-btn'>
                <button onClick={setProductHandler} className='btn'>Legg til i handlekurv</button>
            </div>
            <ToastContainer />
        </div>
    )
}
