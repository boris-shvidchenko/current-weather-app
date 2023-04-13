// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function Results() {

    // Use context
    const { state, dispatch } = useContext(Context);

    return (
        <div className={`duration-700 ease-in-out w-full h-auto pt-3 pb-96 px-10 ${!state.showResults && 'translate-y-[2000px]'}`}></div>
    )
}