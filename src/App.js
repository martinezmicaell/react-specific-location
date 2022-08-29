import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get("https://ipapi.co/json/")
            .then(res => setLocation(res.data))
    }, [])

    const {city} = location

  return (
    <div className="App">
        {city === "Villa Regina" ? (<p>Bienvenido a la App!</p>) : <p>Actualmente nos encontramos en Villa Regina!</p>}
        
    </div>
  );
}

export default App;
