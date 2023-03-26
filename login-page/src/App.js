import { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  const [currForm, setCurrForm] = useState("login");

  const toggleForm = (form) => {
    setCurrForm(form);
  }

  return (
    <div className="App">
      {
        currForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
