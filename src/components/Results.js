// Hooks
import { useContext } from 'react';
// Context
import { Context } from '../App';

export default function Results() {

    // Use context
    const { state, dispatch } = useContext(Context);

    return (
        <div className={`w-full h-auto bg-red-400 ${!state.showResults && 'fixed -bottom-10'}`}>results go here</div>
    )
}