import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import SearchItem from '../SearchItem/SearchItem';

function Search() {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const searchList = useSelector(store => store.search.list);
    const searchCity = useSelector(store => store.search.city);


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit!');

        console.log('city input:', city);
        setCity('');

        axios.post('/api/search', { city: city })
            .then(response => {
                console.log('this is results:', response.data.list[0].dt); // unix UTC time of one 
                // setResults(response.data)
                dispatch({ type: 'FETCH_SEARCH', payload: response.data })
            })
            .catch(err => {
                console.log('err in search:', err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ padding: 20 }}>
                <input
                    placeholder="City"
                    style={{
                        marginRight: 5
                    }}
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <input type="submit" value="Search" />
            </form>
            <div>
                <h2 style={{ marginLeft: 20 }}>Search Results...</h2>
                <SearchItem />
            </div>
        </div>
    )
}

export default Search;