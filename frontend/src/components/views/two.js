import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const Two = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return(
        <div>
        {counter}
        <button
        onClick={() => {dispatch({type: 'DEC_COUNT'})}}
        >
       -1
        </button>
        </div>
    )
}

export default Two