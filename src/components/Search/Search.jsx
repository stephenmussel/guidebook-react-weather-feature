import { useState } from 'react';


function Search() {

    const [city, setCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit!');

    }

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
        <p>{city}</p>
        </>
    )
}

export default Search;