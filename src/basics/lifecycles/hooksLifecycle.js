import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const HooksLifeCycle = () => {

    const [data,setData] = useState("Hi data")

    useEffect(() => {
        console.log("useEffect calling")

        const loadData = axios.get(apiUrl);
        setData(loadData);
        setData("fetch data",loadData)
    },[])

    return (
        <div>
           {data}
        </div>
    )
}
export default HooksLifeCycle;