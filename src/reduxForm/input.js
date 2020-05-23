import React from 'react'

const Input = ({
    placeholder = "Enter the value",
    input,
    meta,
    name,
    disabled = false,
    allowPattern = null
}) => {

    const onChange = (event) => {
        if (allowPattern) {
            const regex = new RegExp(allowPattern);
            if (!regex.test(event.target.value)) {
                event.target.value = input.value;
            }
        }
        input.onChange(event);
    }

    return (
        <input name={name} value={input.value} onChange={onChange} type="text" placeholder={placeholder} />
    )
    // if(disabled){
    //     return <div>Disabled</div>
    // }else{
    //     return (
    //         <input name = {name} value = {input.value} onChange = {onChange} type = "text" placeholder = {placeholder} />
    //     )
    // }
}

export default Input;