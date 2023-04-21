// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function Results() {

    // Use context
    const { state } = useContext(Context);

    return (
        <div className={`duration-700 ease-in-out w-auto h-auto pt-3 pb-96 px-10 mt-10 mx-2 sm:mx-5 ${!state.showResults && 'translate-y-[2000px]'} flex flex-col`}>
            
            {/* Location Info */}
            <section className='overflow-hidden border-b-2 mb-3 pb-3 w-max'>
                <h1 className='text-xl font-bold'>{state?.currentWeather?.location?.name}, {state?.currentWeather?.location?.region}</h1>
                <h2 className='text-lg font-semibold text-black/70'>{state?.astronomyData?.location?.country}</h2>
                <h4>Local time: {state?.currentWeather?.location?.localtime}</h4>
                <p className='text-sm mt-3 text-black/40'>Last updated: {state?.currentWeather?.current?.last_updated}</p>
            </section>

            {/* Current Weather */}
            <section className='overflow-hidden border-b-2 pb-3 mb-3 w-max'>
                <div className='sm:flex sm:space-x-3'>
                    <img src={state?.currentWeather?.current?.condition?.icon} alt='Current weather icon' className='w-32 h-32' />
                    <section className='font-semibold sm:border-l-2 sm:pl-3'>
                        <p>Currently: <span className='font-normal text-black-70'>{state?.currentWeather?.current?.condition?.text}</span></p>
                        <p>Visibility: <span className='font-normal text-black-70'>{state?.currentWeather?.current?.vis_miles} miles/{state?.currentWeather?.current?.vis_km} km</span></p>
                        <p>Cloud cover: <span className='font-normal text-black-70'>{state?.currentWeather?.current?.cloud}%</span></p>
                        <p>Precipitation: <span className='font-normal text-black-70'>{state?.currentWeather?.current?.precip_in} in/{state?.currentWeather?.current?.precip_mm} mm</span></p>
                        <p>Pressure: <span className='font-normal text-black-70'>{state?.currentWeather?.current?.pressure_in} in/{state?.currentWeather?.current?.pressure_mm} mb</span></p>
                    </section>
                </div>
            </section>
            <section className='overflow-hidden font-semibold flex flex-col border-b-2 mb-3 pb-3 w-max'>
                <section>
                    <p>Temperature: <span  className='font-normal text-black-70'>{state?.currentWeather?.current?.temp_f} F/{state?.currentWeather?.current?.temp_c} C</span></p>
                    <p>Feels like: <span  className='font-normal text-black-70'>{state?.currentWeather?.current?.feelslike_f} F/{state?.currentWeather?.current?.feelslike_c} C</span></p>
                    <p>Humidity: <span  className='font-normal text-black-70'>{state?.currentWeather?.current?.humidity}%</span></p>
                    <p>Wind: <span  className='font-normal text-black-70'>{state?.currentWeather?.current?.wind_mph} mph/{state?.currentWeather?.current?.wind_kph} kph</span></p>
                    <p>Wind gusts up to: <span  className='font-normal text-black-70'>{state?.currentWeather?.current?.gust_mph} mph/{state?.currentWeather?.current?.gust_kph} kph</span></p>
                    <p>Wind direction: <span  className='font-normal text-black-70'>{state?.currentWeather?.current?.wind_dir}</span></p>
                </section>
            </section>
            
            {/* Astronomy */}
            <section className='overflow-hidden font-semibold w-max'>
                <p>Sunrise: <span  className='font-normal text-black-70'>{state?.astronomyData?.astronomy?.astro?.sunrise}</span></p>
                <p>Sunset: <span  className='font-normal text-black-70'>{state?.astronomyData?.astronomy?.astro?.sunset}</span></p>
                <p>Moonrise: <span  className='font-normal text-black-70'>{state?.astronomyData?.astronomy?.astro?.moonrise}</span></p>
                <p>Moonset: <span  className='font-normal text-black-70'>{state?.astronomyData?.astronomy?.astro?.moonset}</span></p>
            </section>
        </div>
    )
}