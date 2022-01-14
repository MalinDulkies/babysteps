import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import PlayerComponent from './components/PlayerComponent/PlayerComponent'


function App() {

  const [website, setWebsite] = useState('');



  let getWebsite = (e) => {
    setWebsite(e.target.value);
  }




  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          In this component I want to test out whether or not I can display a video just by entering a URL.
        </p>


        <div>
          Enter the URL <input type="text" onChange={getWebsite} />
          {website && website.length > 0 ? < PlayerComponent url={website} /> : null}
        </div>
      </header>

    </div>
  );
}

export default App;
