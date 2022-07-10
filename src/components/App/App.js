import React from 'react';
import './App.css';

// components
import FetchWeather from '../FetchWeather/FetchWeather';
import Search from '../Search/Search'

function App() {
  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        <h1>Open Weather API</h1>
      </header>
      
      <FetchWeather />
      <Search />
    </div>
  );
}

export default App;
