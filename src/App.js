import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import URLComponent from './components/URLComponent/URLComponent.js'
import PlayerComponent from './components/PlayerComponent/PlayerComponent'

function App() {

  const { url, setURL } = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          In this component I want to test out whether or not I can display a video just by entering a URL.
        </p>

        {/* <URLComponent /> */}

        < div >
          Enter the URL <input type="text" onChange={e => setURL(e.target.value)} />
          {/* <ReactPlayer url={'www.youtube.com/watch?v=tEz1W_O2heU&ab_channel=PandoraJourney'} /> */}
          < PlayerComponent url = {url} />
        </div >
      </header>

    </div>
  );
}

export default App;
