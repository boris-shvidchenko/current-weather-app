import { useState } from 'react';
import './App.css';

export default function App() {

  // State holds location to search, current data, astronomy data
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState();
  const [astronomyData, setAstronomyData] = useState();

  // Testing
  console.log(currentWeather);
  console.log(astronomyData);

  // Updates location state
  function updateLocation(e){
    setLocation(e.target.value);
  }

  // Performs weather search based on location
  async function performSearch() {
    if (location !== '') {
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`)
        .then(res => res.json())
        .then(data => setCurrentWeather(data))
      await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`)
        .then(res => res.json())
        .then(data => setAstronomyData(data))
    }
  }

  return (
    <div>
      <input type="text" className='main-input' value={location} onChange={(e) => updateLocation(e)}/>
      <button onClick={(e) => performSearch(e)}>Click</button>
    </div>
  );
}

