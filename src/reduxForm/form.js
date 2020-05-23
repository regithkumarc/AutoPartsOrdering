import React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store';
import ReduxForms from './reduxForms'
class Forms extends React.Component{
    render() {
        return(
            <Provider store = {store}>
                <div>
                    <ReduxForms></ReduxForms>
                </div>
            </Provider>
        )
    }
}

export default Forms;