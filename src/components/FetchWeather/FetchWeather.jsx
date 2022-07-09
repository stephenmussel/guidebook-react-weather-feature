import axios from 'axios';
import { useState, useEffect } from 'react';

function FetchWeather() {

    const [results, setResults] = useState([]);

    const fetchData = () => {
        console.log('in fetchData!');

        axios.get('/weather')
            .then(response => {
                console.log('response:', response);
                setResults(response);
            })
            .catch(err => {
                console.log('err in fetching data:', err);
            });
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
            <h2 style={{ padding: 20 }}>Results...</h2>
            {JSON.stringify(results)}
        </>
    )
}

export default FetchWeather;