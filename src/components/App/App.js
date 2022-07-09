import React from 'react';
import FetchWeather from '../FetchWeather/FetchWeather';
import './App.css';

function App() {
  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        <h1>Open Weather API</h1>
      </header>
      
      <FetchWeather />
    </div>
  );
}

export default App;
