import React from 'react'
import { useStore, useDispatch } from 'react-redux';
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store'

export const Test = () =>  {
    const useStores = useStore();
    //console.log("useStore",useStore)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type : COUNTER_INCREMENT})
    }

    const decrement = () => {
        dispatch({type:COUNTER_DECREMENT})
    }

    const push = () => {
        dispatch({
            type : "Push",
            value : "Pushed 1"})
    }

    const splice = () => {
        dispatch({
            type : "Splice",
            value : "Pushed 1 "})
    }

    return(
        <div>
            {useStores.getState().counter.count}
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {push}>Push</button>
            <button onClick = {splice}>Slice</button>
        </div>
    )
}