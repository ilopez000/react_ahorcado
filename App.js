// src/App.js

import React from 'react';
import './App.css';
import Hangman from './Hangman';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Juego del Ahorcado</h1>
        <Hangman />
      </header>
    </div>
  );
}

export default App;
