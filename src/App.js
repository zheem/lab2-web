import React from 'react';
import logo from './logo.svg';
import './App.css';
import test from './test.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pane">
          <img src={test}></img>
          <h2 class="h2">Twin Peaks</h2>
          <h3 class="h3">The owls are not what they seem</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
