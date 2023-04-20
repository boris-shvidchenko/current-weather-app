// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function Results() {

    // Use context
    const { state, dispatch } = useContext(Context);

    return (
        <div className={`duration-700 ease-in-out w-auto h-auto pt-3 pb-96 px-10 mt-10 mx-10 ${!state.showResults && 'translate-y-[2000px]'}`}>
            
            {/* Location Info */}
            <section className='border border-black/40 bg-blue-100'>
                <h1>{state?.currentWeather?.location?.name}, {state?.currentWeather?.location?.region}</h1>
                <h2>{state?.astronomyData?.location?.country}</h2>
                <h4>Local time: {state?.currentWeather?.location?.localtime}</h4>
                <p>Last updated: {state?.currentWeather?.current?.last_updated}</p>
            </section>

            {/* Current Weather */}
            <section className='border border-black/40 bg-blue-100'>
                <img src={state?.currentWeather?.current?.condition?.icon} alt='Current weather icon' />
                <section>
                    <p>Currently: {state?.currentWeather?.current?.condition?.text}</p>
                    <p>Visibility: {state?.currentWeather?.current?.vis_miles} miles/{state?.currentWeather?.current?.vis_km} km</p>
                    <p>Cloud cover: {state?.currentWeather?.current?.cloud}%</p>
                    <p>Precipitation: {state?.currentWeather?.current?.precip_in} in/{state?.currentWeather?.current?.precip_mm} mm</p>
                    <p>Pressure: {state?.currentWeathe?.current?.pressure_in} in/{state?.currentWeather?.current?.pressure_mm} mb</p>
                </section>
                <section>
                    <p>Temperature: {state?.currentWeather?.current?.temp_f} F/{state?.currentWeather?.current?.temp_c} C</p>
                    <p>Feels like: {state?.currentWeather?.current?.feelslike_f} F/{state?.currentWeather?.current?.feelslike_c} C</p>
                    <p>Humidity: {state?.currentWeather?.current?.humidity}%</p>
                </section>
                <section>
                    <p>Wind: {state?.currentWeather?.current?.wind_mph} mph/{state?.currentWeather?.current?.wind_kph} kph</p>
                    <p>Wind gusts up to: {state?.currentWeather?.current?.gust_mph} mph/{state?.currentWeather?.current?.gust_kph} kph</p>
                    <p>Wind direction: {state?.currentWeather?.current?.wind_dir}</p>
                </section>
            </section>
            
            {/* Astronomy */}
            <section className='border border-black/40 bg-blue-100'>
                <p>Sunrise: {state?.astronomyData?.astronomy?.astro?.sunrise}</p>
                <p>Sunset: {state?.astronomyData?.astronomy?.astro?.sunset}</p>
                <p>Moonrise: {state?.astronomyData?.astronomy?.astro?.moonrise}</p>
                <p>Moonset: {state?.astronomyData?.astronomy?.astro?.moonset}</p>
            </section>
        </div>
    )
}