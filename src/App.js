import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PlayerComponent from './components/PlayerComponent/PlayerComponent'

function App() {

  const [website, setWebsite] = useState('');

  let getWebsite = (e) => {
    setWebsite(e.target.value);
  }


  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/player" element={<PlayerComponent />} />
          </Routes>
        </Router>
        
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          In this component I want to test out whether or not I can display a video just by entering a URL.
        </p>


        < div >
          Enter the URL <input type="text" onChange={getWebsite} />
          < PlayerComponent url={website} />
        </div >
      </header>

    </div>
  );
}

export default App;
