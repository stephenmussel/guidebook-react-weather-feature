function Search() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit!');
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="City" style={{ marginLeft: 20, marginRight: 5 }}/>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search;