// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function Search() {

    // Use context
    const { state, dispatch } = useContext(Context);

    // Updates location state
    function updateLocation(e){
        dispatch({ type: 'setLocation', location: e.target.value });
    }

    // Performs weather search based on location
    async function performSearch() {
        if (state.location !== '') {
            await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${state.location}`)
                .then(res => res.json())
                .then(data => dispatch({type: 'setCurrentWeather', currentWeather: data}))
            await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_API_KEY}&q=${state.location}`)
                .then(res => res.json())
                .then(data => dispatch({type: 'setAstronomyData', astronomyData: data}))
            }
    }

    return (
        <div>
            <input type="text" className='main-input' value={state.location} onChange={(e) => updateLocation(e)}/>
            <button onClick={(e) => performSearch(e)}>Click</button>
        </div>
    )
}