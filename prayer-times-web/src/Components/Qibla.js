import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Loading from './Loading';



export default function Qibla() {
    const [items, setItems] = useState();
    const [qiblaDir, setQiblaDir] = useState();
    const [lat, setLat] = useState(25.4106386);
    const [lng, setLng] = useState(51.1846025);
    // navigator.geolocation.getCurrentPosition(function (position) {
    //     // console.log("Lat: ", position.coords.latitude)
    //     // console.log("Lng: ", position.coords.longitude)
    //     setLat(position.coords.latitude);
    //     setLng(position.coords.longitude);
    // });

    console.log(lat);
    console.log(lng);

    useEffect(() => {
        async function fetchData(){
            fetch(`http://api.aladhan.com/v1/qibla/${lat}/${lng}`)
          .then((res) => res.json())
          .then((data) => setQiblaDir(data))
          .catch((e) => console.log(e));
        };

        fetchData();
    }, [lat,lng]);

    qiblaDir ? (

        console.log(qiblaDir)
    ) : (
        <Loading />
    );
  
    return (
        <Container name="qibla">
            <div>{qiblaDir.data}</div>
        </Container>
    );
}


const Container = styled.div`
    color: white;
    height
`;
