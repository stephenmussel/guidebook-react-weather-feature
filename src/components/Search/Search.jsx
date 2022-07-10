import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Search() {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

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

    return(
        <>
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

        </div>
        </>
    )
}

export default Search;