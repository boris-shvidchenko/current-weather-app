import { useEffect } from 'react';
import './App.css';

export default function App() {

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=Sacramento`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [])

  return (
    <div></div>
  );
}

