import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import Loading from './Components/Loading';


function App() {
  const [items, setItems] = useState({});
  const [method, setMethod] = useState(4);
  const [city, setCity] = useState("Norway");
  const date = new Date();
  const dateToday = date.getDate();
  let country = "";


  useEffect(() => {
    async function fetchData(){
      fetch(`http://api.aladhan.com/v1/calendarByCity/2023/3?city=Oslo&country=Norway&method=0`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
    }
    fetchData();
  }, [city]);

  // console.log(items.data[dateToday-1].date.hijri.year)
  
  return (
    <>
      <div className="overlay">
        {items.data ? (
          <>
            <div className='container'>
              <Header items={items} today={dateToday} city={city} setCity={setCity}/>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    
    </>
  );
}

export default App;
