
import React from 'react'
import { useState } from 'react'

export default (props) => {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: '', age: '' })

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const inputChanged = (event, field) => {
        if (field === 'name')
            setUser({ ...user, name: event.target.value })
        else
            setUser({ ...user, age: event.target.value })
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <input value={user.name} onChange={(event) => inputChanged(event,'name')}></input>
            <input value={user.age} onChange={(event) => inputChanged(event,'age')}></input>
            <br />
            {JSON.stringify(user)}
        </div>
    )
}