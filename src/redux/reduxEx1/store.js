
import * as redux from 'redux'

const initialState = {
    count : 0,
    data : []
}

// Action
export const COUNTER_INCREMENT = "Increment";
export const COUNTER_DECREMENT = "Decrement";

const countReducer = (state = initialState,action) => {
    switch(action.type){
        case COUNTER_INCREMENT : {
            return{...state,count : state.count+1}
        }
        case COUNTER_DECREMENT : {
            return{...state,count : state.count-1}
        }
        default : {
            return state;
        }
    }
}

const dataReducer = (state = [],action) => {
    switch(action.type){
        case "Push" : {
            console.log("action value",action.value)
            const data = [...state]
            data.push(action.value)
            return{...data}
        }
        case "Splice" : {
            const data = [...state,state.data]
            data.splice(0,action.value);
            return{...state,data}
        }
        default : {
            return state;
        }
    }
}

const rootReducer =(state = {},action) => {
    return {
        counter : countReducer(state.counter,action),
        data : dataReducer(state.data,action)
    }
}

const store = redux.createStore(rootReducer);
export default store;