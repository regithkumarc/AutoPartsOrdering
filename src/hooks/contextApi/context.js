import React from 'react'
export const MyContext = React.createContext();
export const TestContext = React.createContext();

export class StateContext extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <MyContext.Provider value={
                {
                    count: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement
                }
            }>

                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default StateContext;