
import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Contexts';

function App() {

  const [gameState, setGameState] = useState("menu");

  const [score, setScore] = useState(0)

  return (
    <div className="App">
      
      <h1>Quiz App</h1>
      <h2> Steins;Gate Trivia Questions</h2>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
