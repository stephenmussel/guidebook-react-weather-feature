import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function FetchWeather() {

    const dispatch = useDispatch();
    const weather = useSelector(store => store.weather);

    const fetchData = () => {
        console.log('in fetchData!');

        dispatch({ type: 'FETCH_WEATHER' })
    };

    useEffect(() => {
        fetchData();
    }, [])


    // TODO: calculate dew point with temp and humidity
    return(
        <div>
            <h2 style={{ padding: 20 }}>Results...</h2>
            {/* {JSON.stringify(weather)}
            <p>temp: {weather.main.temp} &#176;F</p>
            <p>precip: {weather.pop}%</p>
            <p>humidity: {weather.main.humidity}%</p> */}
        </div>
    )
}

export default FetchWeather;