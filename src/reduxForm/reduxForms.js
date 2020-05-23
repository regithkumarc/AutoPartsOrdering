import React from 'react'
import { Field ,reduxForm} from 'redux-form';
import InPut from './input'
const ReduxForms = props => {

    const onSubmit = (values) => {
        console.log(values)
    }
    
    const {handleSubmit,pristine,reset,submitting} = props
    return (
        <div>
            <Field
                name = "firstName"
                component="input"
                type="text"
                placeholder="firstName"></Field>
                
                {/* custom component */}
            <Field
                name="lastName"
                component = {InPut}
                disabled = {true}
                allowPattern = "^[a-zA-Z]*$"
                type="text"></Field>
                <button disabled = {pristine || submitting} onClick = {handleSubmit(onSubmit)}>Submit</button>
                <button disabled = {pristine || submitting} onClick = {reset} >Clear</button>
        </div>
    )
}
export default reduxForm({
    form : 'simple'
})(ReduxForms);