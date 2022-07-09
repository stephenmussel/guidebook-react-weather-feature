import axios from 'axios';
import { useState, useEffect } from 'react';

function FetchWeather() {

    const [results, setResults] = useState([]);

    const fetchData = () => {
        console.log('in fetchData!');
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
            <h2 style={{ padding: 20 }}>Results...</h2>
        </>
    )
}

export default FetchWeather;