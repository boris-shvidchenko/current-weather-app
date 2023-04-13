import './App.css';
// Hooks
import { createContext, useReducer } from 'react';
// Components
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
    }
  }

  // Test
  // console.log(state);
  
  return (
    <Context.Provider value={{state, dispatch}}>
      <main className='overflow-hidden'>
        <Search />
        <Results />
      </main>
    </Context.Provider>
  );
}

