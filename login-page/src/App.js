import { useState } from 'react';
import Login from './Pages/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import Navbar from './Components/Navbar';

function App() {
  const [currForm, setCurrForm] = useState("login");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
  console.log(isAuth)

  const toggleForm = (form) => {
    setCurrForm(form);
  }

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
