import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function GodsNames() {
    const [names, setNames] = useState({});
    const [loading, setPostsLoading] = useState(false);
    const [error, setPostsError] = useState("");

    const options = {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': '0a3b0c9a9dmsh6a71589c16246c4p14c712jsn61e6482c0db2',
            'X-RapidAPI-Host': 'allah-name.p.rapidapi.com'
        }
    };

    const handlePost = async () =>{
        setPostsLoading(true);
        try{
            const result = await axios.get(`https://allah-name.p.rapidapi.com/name`, options);
            setNames(result.data);
        } catch (error) {
            setPostsError(error.message || "Unexpected Error!");
        } finally {
            setPostsLoading(false);
        }
    };


    useEffect(() => {
        handlePost();
    }, []);

    console.log(names)

    return (
        <Container>
            <div>
                <div className='nameContainer'>
                    
                    <table id='monthCalender'>
                        <tr>
                            <th>№</th>
                            <th>Name</th>
                            <th>Transliteration</th>
                            <th>Meaning</th>
                            <th>Explanation</th>
                            <th>Benefit by saying</th>
                        </tr>
                        {names.main?.map((name,nm) =>
                        <tr>
                            <td className='number'>
                                <li key={nm.numb}>{name.id}</li>
                            </td>
                        
                            <td className='namesArabic'>
                                <li key={nm.name}>{name.arName}</li>
                            </td>
                            
                            <td>
                                <li key={nm.tl}>{name.enName}</li>
                            </td>

                            <td>
                                <li key={nm.en}>{name.meaning}</li>
                            </td>

                            <td>
                                <li className='expl' key={nm.ex}>{name.explanation}</li>
                            </td>

                            <td className='benefit'>
                                <li key={nm.ex}>{name.benefit}</li>
                            </td>
                        </tr>

                        )}
                        
                    </table>

                </div>
            </div>
        </Container>
    );
};


const Container = styled.div`
    width: 100%;
    positon: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    .nameContainer{
        display: flex;
        flex-direction: row;
        min-height: 90vh;
        justify-content: center;
    }

    #monthCalender{
        border-collapse: collapse;
        width: 60%;
        align-content: center;
        
        td, th{
            border: 1px solid #ddd;
            padding: 8px;
            color: white;
            font-size: 24px;
            // background-color: white;
        }

        th{
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            color: black;
            background-color: #04AA6D;
        }

        li{
            list-style-type: none;
        }

        .namesArabic{
            text-align: right;
        }

        .number{
            width: 50px;
        }

        .expl{
            width: 300px;
        }

        .benefit{
            width: 400px;
        }
    }
    
`;
