import React, {useState, useEffect} from 'react'
import styled from 'styled-components';



export default function Qibla() {
    const [qiblaDir, setQiblaDir] = useState({});
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    
    navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    });

    

    useEffect(() => {
        async function fetchData(){
            fetch(`http://api.aladhan.com/v1/qibla/${lat}/${lng}`)
            .then((res) => res.json())
            .then((data) => setQiblaDir(data.data))
            .catch((e) => console.log(e));     
        };

        fetchData();
    }, [lat,lng]);

    // console.log(qiblaDir)

    return (
        <Container name="qibla">
            <div className='container'>
                {qiblaDir.direction}
            </div>
           
        </Container>
    );
}


const Container = styled.div`
    .container{
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        min-height: 100vh;
    }
`;
