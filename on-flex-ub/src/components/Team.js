import React from 'react'
import styled from 'styled-components'


export default function Team() {
    return (
        <Container>
            <div className='teamContainer'>
                <div className="service" id='Team'>
                    <h1>The Team</h1>

                    <div className="first-services">
                        <div className="box">
                            <div className='box-content'>
                                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG" alt=''/>
                            
                                <p className="center">
                                    <p style={{textDecoration:"none", color: "white", fontWeight:"bold", fontFamily: 'Langar, cursive'}}>
                                        Said Amin Solsaev
                                    </p>
                                </p>
                                <p style={{fontFamily: "sans-serif", color: "#bbb"}}>Daglig Leder</p>
                            </div>
                        </div>
                    </div>

                    <div className="services">
                        <div className="box">
                            <div className='box-content'>
                                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG" alt="dagligLeder" />
                            
                                <p className="center">
                                    <p style={{textDecoration:"none", color: "white", fontWeight:"bold", fontFamily: 'Langar, cursive'}}>
                                        Kian Yazdani
                                    </p>
                                </p>
                                <p style={{fontFamily: "sans-serif", color: "#bbb"}}>Markedsansvarlig</p>
                            </div>
                        </div>

                        <div className="box">
                            <div className='box-content'>
                                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG" alt=''/>
                                
                                <p className="center">
                                    <p style={{textDecoration:"none", color: "white", fontWeight:"bold", fontFamily: 'Langar, cursive'}}>
                                        Muad Mohamed Hussein
                                    </p>
                                </p>
                                <p style={{fontFamily: "sans-serif", color: "#bbb"}}>Personalansvarlig</p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="services">
                        <div className="box">
                            <div className='box-content'>
                                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG" alt=''/>
                            
                                <p className="center">
                                    <p style={{textDecoration:"none", color: "white", fontWeight:"bold", fontFamily: 'Langar, cursive'}}>
                                        Amir Musliji
                                    </p>
                                </p>
                                <p style={{fontFamily: "sans-serif", color: "#bbb"}}>Økonomiansvarlig</p>
                            </div>
                        </div>
                        
                        <div className="box">
                            <div className='box-content'>
                                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20201231132740/Capture.PNG" alt=''/>
                                
                                <p className="center">
                                    <p style={{textDecoration: "none", color:"white", fontWeight: "bold", fontFamily: 'Langar, cursive'}}>
                                        Feyyaz Sakar
                                    </p>
                                </p>
                                <p style={{fontFamily: "sans-serif", color: "#bbb"}}>Produktansvarlig</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}


const Container = styled.div`
    .teamContainer{
        height: 120vh;
        background-color: #333;
    }
    
    .service{
        h1{
            color: white;
            text-align: center;
            margin-bottom: 20px;
            font-family: 'Piazzolla', serif;
        }   
    }

    .services{
        display: flex;
        align-items: center;
        height: 300px;
    }

    .box{
        width: 400px;
        height: 200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-right: auto;
        margin-left: auto;

        .box-content{
            text-align: center;
            width: 100%;
            transition: transform 2s;
            
            img{
                width: 120px;
                border-radius: 70%;
                margin-right: auto;
                margin-left: auto;
            }

            &:hover{
                background-color: red;
                transform: scale(2);
            }
        }
    }


    @media (max-width: 600px){
        .teamContainer{
            height: 150vh;
            background-color: #333;
        }

        .services{
            display: flex;
            flex-direction: column;
            height: 500px;
            
            .box{
                height: 400px;

                
                .box-content{
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                }
            }
            
        }
    
    }
`;