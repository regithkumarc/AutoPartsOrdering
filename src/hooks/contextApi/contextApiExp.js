import React from 'react'
import Hello from './hello'
import { StateContext, TestContext } from './context';
import App from './app';

class ContextApiEx extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         count: 0
    //     }
    // }

    // increment = () => {
    //     this.setState({count : this.state.count + 1})
    // }

    // decrement = () => {
    //     this.setState({count : this.state.count - 1})
    // }

    render() {
        return (
            // <MyContext.Provider value = {
            //     {
            //         count : this.state.count,
            //         increment : this.increment,
            //         decrement : this.decrement
            //     }
            //     }>
            //     <Hello></Hello>
            // </MyContext.Provider>
            <StateContext>
                <TestContext.Provider value={{ name: "regith" }}>
                    <div>
                        <Hello></Hello>
                        <App></App>
                    </div>
                </TestContext.Provider>
            </StateContext>
        )
    }
}

export default ContextApiEx;