import './App.css';
import { useState } from "react";
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndGame from './components/EndGame';

import QuizContext from './components/Context';

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Swedish Driver's License Quiz</h1>
      <QuizContext.Provider value={{ gameState, setGameState }}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endgame" && <EndGame />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
