import { useState } from 'react';
import './App.css';

export default function App() {

  // State holds location to search
  const [location, setLocation] = useState('');

  // Updates location state
  function updateLocation(e){
    setLocation(e.target.value);
  }

  // Performs weather search based on location
  function performSearch() {
    if (location !== '') {
      fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }

  return (
    <div>
      <input type="text" className='main-input' value={location} onChange={(e) => updateLocation(e)}/>
      <button onClick={(e) => performSearch(e)}>Click</button>
    </div>
  );
}

