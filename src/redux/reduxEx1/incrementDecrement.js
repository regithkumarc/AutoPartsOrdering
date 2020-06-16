import React from 'react'
import { Provider } from 'react-redux'
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store';
import Hello from './hello';

class IncrementDecrement extends React.Component {

    increment = () => {
        store.dispatch({type : COUNTER_INCREMENT})
        console.log(store.getState().count)
    }

    decrement = () => {
        store.dispatch({type : COUNTER_DECREMENT})
        console.log(store.getState().count)
    }


    render() {
        return(
            <Provider store = {store}>
                <button onClick = {this.increment}>Increment</button>
                <button onClick = {this.decrement}>Decrement</button>
                <Hello></Hello>
            </Provider>
        )
    }
}

export default IncrementDecrement;