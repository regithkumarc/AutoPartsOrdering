import React from 'react'

class TestFile extends React.Component {
    render() {
        return (
            <div>
               <p className = "testNameHeader">{this.props.name}</p>
               <button>Click</button>
            </div>
        )
    }
}
export default TestFile;            