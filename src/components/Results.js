// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function Results() {

    // Use context
    const { state } = useContext(Context);

    return (
        <div className={`${!state.showResults && 'translate-y-[2000px] hidden'} results-main`}>
            
            {/* Location Info */}
            <section className='result-section'>
                <h1 className='text-xl font-bold'>{state?.currentWeather?.location?.name}, {state?.currentWeather?.location?.region}</h1>
                <h2 className='text-lg font-semibold text-black/70'>{state?.astronomyData?.location?.country}</h2>
                <h4>Local time: {state?.currentWeather?.location?.localtime}</h4>
                <p className='text-sm mt-3 text-black/40'>Last updated: {state?.currentWeather?.current?.last_updated}</p>
            </section>

            {/* Current Weather */}
            <section className='result-section'>
                <div className='sm:flex sm:space-x-3'>
                    <img src={state?.currentWeather?.current?.condition?.icon} alt='Current weather icon' className='w-32 h-32' />
                    <section className='sm:border-l-2 sm:pl-3'>
                        <p>Currently: <span className='result-p'>{state?.currentWeather?.current?.condition?.text}</span></p>
                        <p>Visibility: <span className='result-p'>{state?.currentWeather?.current?.vis_miles} miles/{state?.currentWeather?.current?.vis_km} km</span></p>
                        <p>Cloud cover: <span className='result-p'>{state?.currentWeather?.current?.cloud}%</span></p>
                        <p>Precipitation: <span className='result-p'>{state?.currentWeather?.current?.precip_in} in/{state?.currentWeather?.current?.precip_mm} mm</span></p>
                        <p>Pressure: <span className='result-p'>{state?.currentWeather?.current?.pressure_in} in/{state?.currentWeather?.current?.pressure_mm} mb</span></p>
                    </section>
                </div>
            </section>
            <section className='result-section flex flex-col'>
                <section>
                    <p>Temperature: <span className='result-p'>{state?.currentWeather?.current?.temp_f} F/{state?.currentWeather?.current?.temp_c} C</span></p>
                    <p>Feels like: <span className='result-p'>{state?.currentWeather?.current?.feelslike_f} F/{state?.currentWeather?.current?.feelslike_c} C</span></p>
                    <p>Humidity: <span className='result-p'>{state?.currentWeather?.current?.humidity}%</span></p>
                    <p>Wind: <span className='result-p'>{state?.currentWeather?.current?.wind_mph} mph/{state?.currentWeather?.current?.wind_kph} kph</span></p>
                    <p>Wind gusts up to: <span className='result-p'>{state?.currentWeather?.current?.gust_mph} mph/{state?.currentWeather?.current?.gust_kph} kph</span></p>
                    <p>Wind direction: <span className='result-p'>{state?.currentWeather?.current?.wind_dir}</span></p>
                </section>
            </section>
            
            {/* Astronomy */}
            <section className='result-section'>
                <p>Sunrise: <span className='result-p'>{state?.astronomyData?.astronomy?.astro?.sunrise}</span></p>
                <p>Sunset: <span className='result-p'>{state?.astronomyData?.astronomy?.astro?.sunset}</span></p>
                <p>Moonrise: <span className='result-p'>{state?.astronomyData?.astronomy?.astro?.moonrise}</span></p>
                <p>Moonset: <span className='result-p'>{state?.astronomyData?.astronomy?.astro?.moonset}</span></p>
            </section>
        </div>
    )
}