import axios from 'axios';
import { useState, useEffect } from 'react';

function FetchWeather() {

    const [results, setResults] = useState([]);

    const fetchData = () => {
        console.log('in fetchData!');

        axios.get('/weather')
            .then(response => {
                console.log('response.data:', response.data);
                setResults(response.data);
            })
            .catch(err => {
                console.log('err in fetching data:', err);
            });
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            <h2 style={{ padding: 20 }}>Results...</h2>
            <p>temp: {results.temp}</p>
            <p>feels like: {results.feels_like}</p>
            <p>temp min: {results.temp_min}</p>
            <p>temp max: {results.temp_max}</p>
            <p>pressure: {results.pressure}</p>
            <p>humidity: {results.humidity}</p>
        </div>
    )
}

export default FetchWeather;