import { useState } from 'react';
import axios from 'axios';

function Search() {

    const [city, setCity] = useState('');
    const [result, setResult] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit!');

        console.log('city input:', city);
        setCity('');

        axios.post('/api/search', { city: city })
            .then(response => {
                console.log('this is result:', response);
            })
            .catch(err => {
                console.log('err in search:', err);
            });
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="City" 
                style={{ 
                    marginLeft: 20, 
                    marginRight: 5 
                }}
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <input type="submit" value="Search" />
        </form>
        </>
    )
}

export default Search;