import './App.css';
// Hooks
import { createContext, useReducer } from 'react';
// Components
import Search from './components/Search';

// Context 
export const Context = createContext();

export default function App() {

  // State
  const initialState = {
    location: '',
    currentWeather: null,
    astronomyData: null
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
    }
  }

  // Test
  console.log(state);
  
  return (
    <Context.Provider value={{state, dispatch}}>
      <Search />
    </Context.Provider>
  );
}

