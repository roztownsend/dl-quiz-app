import './App.css';
import React, { useState, useContext } from "react";
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndGame from './components/EndGame';

import { QuizContext } from './helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>DL Quiz App</h1>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endgame" && <EndGame />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
