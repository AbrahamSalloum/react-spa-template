import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


const One = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return(
        <div>
        {counter}
        <button
        onClick={() => {dispatch({type: 'INC_COUNT'})}}
        >
       +1
        </button>
        </div>
    )
}

export default One