import './App.css';
import { createContext, useReducer } from 'react';
import Search from './components/Search';
import Results from './components/Results';

// Context 
export const Context = createContext();

export default function App() {

  // State
  const initialState = {
    location: '',
    currentWeather: null,
    astronomyData: null,
    showResults: false,
    error: false,
  }

  // Reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  
  function reducer(state, action) {
    switch (action.type) {
      case 'setLocation':
        return {...state, location: action.location}
      case 'setCurrentWeather':
        return {...state, currentWeather: action.currentWeather}
      case 'setAstronomyData':
        return {...state, astronomyData: action.astronomyData}
      case 'setShowResults':
        return {...state, showResults: action.showResults}
      case 'setError':
        return {...state, error: action.error}
    }
  }
  
  return (
    <Context.Provider value={{state, dispatch}}>
        <Search />
        <Results />
    </Context.Provider>
  );
}

