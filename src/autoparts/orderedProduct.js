import React from 'react'
class OrderedProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orderedMsg : "",
            orderedCount : ""
        }
    }

    componentDidMount(){
        if(this.props.location.orderedMsg !== undefined){
            this.setState({orderedMsg : this.props.location.orderedMsg})
            this.setState({orderedCount : this.props.location.orderedCount})
        }
    }

    render() {
        return(
            <div>
                <h4>{this.state.orderedMsg + "  " + this.state.orderedCount}</h4>
            </div>
        )
    }
}
export default OrderedProduct;