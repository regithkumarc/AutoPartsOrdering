import  * as redux from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

const initialState = {
    count : 0
}

//Action
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

const countReducer = (state = initialState,action) => {
    switch(action.type){
        case COUNTER_INCREMENT : {
            return {...state,count : state.count + 1};
        }
        case COUNTER_DECREMENT : {
            return {...state,count : state.count - 1};
        }
        default : {
            return state;
        }
    }
}

const testReducer = (state = [],action) => {
    switch(action.type){
        case "push" : {
            const data = [...state];
            data.push(action.value);
            console.log("action value",action.value)
            return [...data];
        }
        case "pop" : {
            const data = [...state];
            data.pop();
            return [...data]
        }
        default : {
            return state;
        }
    }
}

const dataReducer = (state = {getData : null},action) => {
    switch(action.type){
        case "setData" : 
        console.log("action.data : ",action.data)
            return {getData : action.data}
        case "removeData" :
            return {getdata : null}
        default : 
            return state;
    }
}

// const rootReducer = (state = {},action) => {
//     //.log(state);
//     //console.log(action.type);
//     return {
//         counter : countReducer(state.counter,action),
//         tester : testReducer(state.tester,action),
//         getData : dataReducer(state.getData,action)
//     }
// }

const rootReducer = redux.combineReducers({
    counter : countReducer,
    tester : testReducer,
    getData : dataReducer,
    form : formReducer
})

const store = redux.createStore(rootReducer,redux.applyMiddleware(thunk));
export default store;