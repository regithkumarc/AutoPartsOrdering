import React from 'react'
import { connect } from 'react-redux'
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './store'
import axios from 'axios'

//redux-thunk for middleware
const fetchData = () => {
    console.log("fetched");
    return (dispatch,getState) => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
            //this.props.setData(result.data);
            console.log("result.data : " , result.data)
            console.log("getState : " , getState())
            dispatch({type : 'setData',data : result.data})
        })    
    }
}

class Hello extends React.Component {

    state = {
        data : []
    }

    add = () => {
        const count = this.props.count;
        console.log(count)
        this.props.update(count)
    }

    getDatas = () => {
        // if(this.props.data.length === 0) {
        //     axios.get("https://jsonplaceholder.typicode.com/posts").then(result => {
        //         this.props.setData(result.data);
        //     })
        // }
    }

    removeData = () => {
        this.props.removeData();
    }

    render () {
        console.log("this.props.getData : ",this.props.getdata)
        return <div>
        <h1>Hello {this.props.count}</h1>
        <button onClick = {this.props.increment}>Increment</button>
        <button onClick = {this.props.decrement}>Decrement</button>
        <button onClick = {this.add}>Push</button>
        <button onClick = {this.props.setData}>Get Data</button>
        <button onClick = {this.removeData}>Remove Data</button>
        {this.props.data.map((x,index) => <div key = {index}><p>{x.title}</p></div>)}
    </div>
    }
    
}

const mapStateToProps = (state) => {
    // store state object 
    console.log("Store to Props calling")
    console.log("getdata : ",state.getData.data)
    return {
        count: state.counter.count,
        tester : state.tester,
        data : state.getData.getData || []
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        increment : () =>  dispatch({ type: COUNTER_INCREMENT }),
        decrement: () => dispatch({ type: COUNTER_DECREMENT }),
        update : (data) => dispatch({type : "push",value : data}),
        setData : (data) => {
            console.log("setData : " , data)
            console.log("Dispatch to State calling")
            //dispatch({type : 'setData',data})
            dispatch(fetchData())
        },
        removeData : () => {
            dispatch({type : 'removeData'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Hello);
// 1st parameter get data from store and pass it to props to use child component
//2nd parameter put data to store 