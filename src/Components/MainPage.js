import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ProductBox from './ProductBox'
import CartContainer from './CartContainer'
import { productArr } from '../data/Cart'
import { Poducts } from '../data/OurProducts'

export default function MainPage() {
  const [products, setProducts] = useState([])

  const handleSetProduct = () => {
    let prodArr = []
    productArr.forEach((prod) => {
      prodArr.push({...prod, title: prod.title, price: prod.price})
    });
    setProducts(prodArr)
  }

  
  return (
    <Container>
      <div className='prodCont'>
        <div className='left-side'>
          <div className='cards'>
            <main>
              {Poducts.map((e, x) => {
                return (
                  <ProductBox key={x} title={e.title} price={e.price} imgSrc={e.pic.jb} handleSetProduct={handleSetProduct} />
                )
              })}
              
            </main>
          </div>
        </div>

        <div className='right-side'>
          <CartContainer products={products} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`

.prodCont {
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  padding-top: 15px;
}

.prodCont .left-side {
  width: calc(100% - 40%);
  overflow-y: scroll;
  padding-left: 20px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.prodCont .left-side::-webkit-scrollbar {
  display: none;
}


.prodCont .left-side .cards {
  background: #252837;
  padding: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  margin-top: 20px;
  border-radius: 10px;
}

.prodCont .left-side .cards main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.prodCont .left-side .cards main .details {
  display: flex;
  flex-direction: column;
  background: #1F1D2B;
  border-radius: 10px;
  max-width: 200px;
  padding-bottom: 20px;
  margin: 10px 5px;
  overflow: hidden;
  min-height: 380px;
}

.prodCont .left-side .cards main .details .details-img {
  max-width: 100%;
  object-fit: cover;
  object-position: center;
}

.prodCont .left-side .cards main .details .food-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  margin-top: 10px;
}

.prodCont .left-side .cards main .details .food-name h2 {
  color: #e9e9ec;
  font-size: 16px;
  font-weight: bold;
}

.prodCont .left-side .cards main .details .food-details {
  padding: 5px 10px;
  text-align: left;
  margin: 10px;
}
.prodCont .left-side .cards main .details .food-details p {
  font-size: 12px;
  font-weight: bold;
  color: #a5a4a9;
}

.prodCont .left-side .cards main .details .cart-btn {
  padding: 5px 20px;
}

.prodCont .left-side .cards main .details .cart-btn .btn {
  text-decoration: none;
  font-size: 12px;
  color: #fff;
  background: linear-gradient(#F17E6C, #fa7c69);
  padding: 7px 10px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

.prodCont .left-side .cards main .details .cart-btn .btn:hover {
  background: none;
  color: #F17E6C;;
  border: 1px solid #F17E6C;;
  transition: 0.5s ease-in-out;
}



.prodCont .right-side {
  width: calc(100% - 60%);
  padding: 0px 10px;
  padding-left: 20px;
  padding: 15px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.prodCont .right-side .payment {
  background: #1F1D2B;
  border-radius: 20px;
  padding: 10px 20px;
}

.prodCont .right-side .payment .name {
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 7px;
}

.prodCont .right-side .payment .price {
  width: 100%;
  padding: 5px 1px;
}

.prodCont .right-side .payment .price article {
  margin: 8px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #adabb8;
  background: #1F1D2B;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}


.prodCont .right-side .payment .price article .pay {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // min-width: 200px;
  // max-width: 500px;
  padding: 5px;
  align-items: center;
}



.prodCont .right-side .payment .price article .qty-container .qty-box{
  padding: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: black;
  border-radius: 7px;
}

.prodCont .right-side .payment .price article .qty-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.prodCont .right-side .payment .price article .qty-container button{
  padding: 1rem;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
}


.prodCont .right-side .payment .price figure {
  margin: 8px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #adabb8;
  background: #1F1D2B;
  border-radius: 5px;
  min-width: 230px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
} 

.prodCont .right-side .payment .price figure:last-child {
  padding: 15px 10px 15px 10px;
  width: full-width;
}

.prodCont .right-side .payment .price figure:last-child .last .space {
  margin-bottom: 10px;
}

.prodCont .right-side .payment .price figure:last-child .last p {
  font-weight: bold;
}



@media screen and (max-width: 525px) {
  .prodCont {
    flex-direction: column;
    height: auto;
  }
  .prodCont .left-side {
    width: 100%;
  }

  .prodCont .left-side .cards main .details {
    max-width: 325px;
  }

  .prodCont .left-side .cards .all .varieties {
    overflow-x: scroll;
  }

  .prodCont .right-side {
    width: 100%;
    padding: unset;
  }
}

@media only screen and (min-width: 525px) and (max-width: 950px) {
    .prodCont {
        height: calc(100% - 25px);
    }

    .prodCont .left-side {
        width: calc(100% - 30%);
    }

    .prodCont .right-side {
        width: calc(100% - 60%);
    }

  .prodCont .left-side .cards main .details {
    max-width: 230px;
    margin: 20px 5px;
  }

  .prodCont .left-side .cards .all {
    padding: 0;
  }

  .prodCont .right-side .payment .price {
    padding: 0;
  }
}







`;
