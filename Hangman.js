// src/Hangman.js

import React, { useState } from 'react';
import Word from './Word';
import Alphabet from './Alphabet';

const words = ['react', 'javascript', 'openai', 'programacion', 'computadora'];

function Hangman() {
  const [selectedWord, setSelectedWord] = useState(randomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(0);

  function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!selectedWord.includes(letter)) {
        setAttempts(prev => prev + 1);
      }
    }
  };

  return (
    <div>
      <Word word={selectedWord} guessedLetters={guessedLetters} />
      <Alphabet guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
      <p>Intentos fallidos: {attempts}</p>
    </div>
  );
}

export default Hangman;
