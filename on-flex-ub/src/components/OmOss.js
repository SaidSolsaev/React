import React from 'react'
import styled from 'styled-components'
import {AiOutlineArrowDown} from "react-icons/ai"

export default function OmOss() {
    
    
    
    return (
        <Container>
            <div className='container'>
                <div className="box-main">
                    <div className="firstHalf">
                        <p className="text-big">Hvem er vi</p>
                        
                        <p className="text-small">
                            Vi er en ungdomsbedrift som skal utvikle sticky klistremerker som
                            skal fungere som reflekser <br/> De som bruker skal få lov til å bestemme designet selv
                        </p>
                        <br />
                        <p className="center">
                            <a href="#Team" style={{textDecoration: "none"}}>
                                Sjekk ut Teamet vårt <br /> <AiOutlineArrowDown size={24}/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Container>

    );
}

const Container = styled.div`
    background-color: #333;

    .container{
        display: flex;
        width: 100%;
        height: 40vh;
        justify-conent: center;
    }

    .box-main {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        max-width: 80%;
        margin: auto;
    }

    .firstHalf {
        width: 75%;
        display: flex;
        flex-direction: column; 
        justify-content: center
    }
    
    a{
        color: white;
    }


    .text-big {
        font-family: 'Piazzolla', serif;
        font-weight: bold;
        font-size: 38px;
        text-align: center;
    }

    .text-small {
        font-family: 'Sansita Swashed', cursive;
        font-size: 18px;
        text-align: center;
    }

    .center{
        text-align: center;
        margin-top: 20px;

        &:hover{
            border: 1px solid rgb(4, 170, 109);
            padding: 8px 4px;
            background-color: rgb(4, 170, 109);
            border-radius: 2em;
        }
    }
    

   

    @media screen and (max-width: 650px) {

        .firstHalf {
            width: 100%;
            display: flex;
            flex-direction: column; 
            justify-content: center
        }

        .text-big {
            font-family: 'Piazzolla', serif;
            font-weight: bold;
            font-size: 28px;
            text-align: center;
        }

        .text-small {
            font-family: 'Sansita Swashed', cursive;
            font-size: 18px;
            text-align: center;
        }
    }
`;
