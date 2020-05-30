import React from 'react'

class Home extends React.Component {

    constructor() {
        console.log("constructor calling")
        super();

        this.state = {
            name: 'regith'
        }

        //befor mounting we cant set any state value
        //this.setState({name : "kumar"})
    }

    clicked = () => {
        console.log("Clicked")
        this.setState({ name: 'kumar' })
    }

    render() {
        console.log("render calling")
        return (
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.clicked}>Click</button>
                {/* <HooksLifeCycle></HooksLifeCycle> */}
            </div>

        )
    }

    componentDidMount() {
        console.log("componentdidmount calling");
        //this.setState({ name: "kumar" })
    }

    //deprecated replaced ComponentDidMount
    // componentWillMount() {
    //     console.log("componentWillMount calling")
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps calling")

        console.log("nextProps", nextProps)
        console.log("prevState", prevState)
        // if(prevState.name !== nextProps.name){
        //     return name : "Updated"
        // }

        return null;
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate calling")
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("componentDidUpdate calling")
        return null;
    }

    componentDidUpdate() {
        console.log("componentDidUpdate calling")
    }

    // ComponentDidUpdate
    // componentWillUpdate() {
    //     console.log("componentWillUpdate calling")
    // }

    componentWillUnmount() {
        console.log("componentWillUnmount calling")
    }

    // static getDerivedStateFromError() {
    //     console.log("getDerivedStateFromError calling")
    // }

    // componentDidCatch() {
    //     console.log("componentDidCatch calling")
    // }
}
export default Home;