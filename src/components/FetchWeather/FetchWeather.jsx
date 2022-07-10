import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function FetchWeather() {

    const [results, setResults] = useState([]);
    const dispatch = useDispatch();

    const fetchData = () => {
        console.log('in fetchData!');

        dispatch({ type: 'FETCH_WEATHER' })
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div>
            <h2 style={{ padding: 20 }}>Results...</h2>
          
        </div>
    )
}

export default FetchWeather;