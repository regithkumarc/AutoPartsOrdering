import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./store"

// const initialval = {
//     data : []
// }

export const mapDispatchToState = (dispatch) => {
    //console.log("hello mapDispatchToState")
    return {
        increment : () =>  dispatch({ type: COUNTER_INCREMENT }),
        decrement: () => dispatch({ type: COUNTER_DECREMENT }),
        update : (data) => dispatch({type : "push",value : data}),
        setData : (data) => {
            console.log("setData : " , data)
            console.log("Dispatch to State calling")
            //dispatch({type : 'setData',data})
            //dispatch(fetchData())
        },
        removeData : () => {
            dispatch({type : 'removeData'})
        }
    }
}