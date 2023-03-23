import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';

export default function GodsNames() {
    const [names, setNames] = useState({});
    const [loading, setPostsLoading] = useState(false);
    const [error, setPostsError] = useState("");

    const handlePost = async () =>{
        setPostsLoading(true);
        try{
            const result = await axios.get(`http://api.aladhan.com/asmaAlHusna`);
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
                        
                        </tr>
                        {names.data?.map((name,nm) =>
                        <tr>
                            
                            <td className='number'>
                                <li key={nm.numb}>{name.number}</li>
                            </td>
                        
                            <td className='namesArabic'>
                                <li key={nm.name}>{name.name}</li>
                            </td>
                            
                            <td>
                                <li key={nm.tl}>{name.transliteration}</li>
                            </td>

                            <td>
                                <li key={nm.en}>{name.en.meaning}</li>
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
    }
    
`;
