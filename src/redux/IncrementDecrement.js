import React from 'react'
import store, { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store'
import Hello from './hello'
import { Provider } from 'react-redux'
class IncrementDecrement extends React.Component {

    increment = () => {
        store.dispatch({ type: COUNTER_INCREMENT })
        console.log(store.getState().count)
    }

    decrement = () => {
        store.dispatch({ type: COUNTER_DECREMENT })
        console.log(store.getState().count)
    }

    push = () => {
        store.dispatch({ type: "push" });
        console.log(store.getState())
    }

    pop = () => {
        store.dispatch({ type: "pop" });
        console.log(store.getState())
    }

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.push}>Push</button>
                    <button onClick={this.pop}>Pop</button>
                    <Hello></Hello>
                </div>
            </Provider>
        )
    }
}
export default IncrementDecrement;
