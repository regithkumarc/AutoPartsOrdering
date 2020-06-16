
import * as redux from 'redux'

const initialState = {
    count : 0
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

const rootReducer =(state = {},action) => {
    return {
        counter : countReducer(state.counter,action)
    }
}

const store = redux.createStore(rootReducer);
export default store;