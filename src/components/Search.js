import { useContext } from 'react';
import { Context } from '../App';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

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
            const res1 = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${state.location}`);
            const res2 = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_API_KEY}&q=${state.location}`);
            // If the fetch response is outside of the range 200-299 (successful response, or .ok method is false), throw an error
            if (res1.ok && res2.ok) {
                const res1Data = await res1.json();
                const res2Data = await res2.json();
                await dispatch({type: 'setCurrentWeather', currentWeather: res1Data});
                await dispatch({type: 'setAstronomyData', astronomyData: res2Data});
                // Remove text from input bar, update showResults state to true (to move component up into the UI), and update error state to false
                await dispatch({ type: 'setLocation', location: ''});
                await dispatch({ type: 'setShowResults', showResults: true});
                await dispatch ({type: 'setError', error: false});
            } else {
                console.log('An error occured');
                dispatch ({type: 'setError', error: true});
            }  
        }
    }

    // Styles
    const main = !state.showResults ? 'mt-48 sm:mt-80 w-auto sm:w-[500px] mx-4 sm:mx-auto space-y-3' : 'flex items-center justify-between space-x-5 my-4';

    return (
        <>
            <main className={`${main} search-main`}>
                <h1 className='search-h1'>Weather Now</h1>
                <form onSubmit={(e) => performSearch(e)} className='search-form'>
                    <input type="text" className='w-full p-1 flex-1 outline-none' value={state.location} onChange={(e) => updateLocation(e)}/>
                    <MagnifyingGlassIcon className='w-6 h-6 cursor-pointer hover:text-blue-800' onClick={(e) => performSearch(e)} />
                </form>
                <p className={`${state.showResults && 'hidden'} text-sm relative left-2 pt-2 text-slate-500`}>Current weather, anywhere in the world.</p>
                <p className={`${!state.error && 'hidden'} ${state.showResults && 'hidden'} text-sm relative left-2 text-red-400`}>Location not found, please try again.</p>
            </main>
            <p className={`${(state.error && state.showResults) && 'text-sm absolute right-14 text-red-400 ml-12'} ${(!state.error || !state.showResults) && 'hidden'}`}>Location not found, please try again.</p>
        </> 
    )
}