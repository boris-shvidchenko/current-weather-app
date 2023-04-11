// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';
// Icons
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Search() {

    // Use context
    const { state, dispatch } = useContext(Context);

    // Updates location state
    function updateLocation(e){
        dispatch({ type: 'setLocation', location: e.target.value });
    }

    // Performs weather search based on location
    async function performSearch(e) {
        e.preventDefault();
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
        <main className='mt-60 sm:mt-80 w-auto sm:w-[500px] mx-4 sm:mx-auto space-y-3'>
            <h1 className='text-3xl flex-1 sm:flex-none relative left-2 font-semibold text-blue-800'>Weather Now</h1>
            <form onSubmit={(e) => performSearch(e)} className='flex items-center space-x-2 border border-slate-600 py-2 px-4 rounded-3xl shadow-md drop-shadow-sm'>
                <input type="text" className='w-full p-1 flex-1 outline-none' value={state.location} onChange={(e) => updateLocation(e)}/>
                <MagnifyingGlassIcon className='w-6 h-6 cursor-pointer hover:text-blue-800' onClick={(e) => performSearch(e)} />
            </form>
            <p className='text-sm relative realtive left-2 pt-2 text-slate-500'>Current weather, anywhere in the world.</p>
        </main>
    )
}