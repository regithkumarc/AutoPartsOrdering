import React from 'react'
import { mapDispatchToState } from './mapDispatchToState';
import { mapStateToProps } from './mapStateToProps';
import { connect } from 'react-redux';
import { Test } from './test';

class Hello extends React.Component {
    render() {
        return(
            <div>
                <p></p>
                <button onClick = {this.props.increment}>Increment</button>
                <button onClick = {this.props.decrement}>Decrement</button>
                <Test count = {this.props.count}></Test>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToState)(Hello);