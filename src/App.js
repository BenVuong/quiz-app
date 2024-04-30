
import './App.css';
import React, {useState, useContext} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Contexts';

function App() {

  const [gameState, setGameState] = useState("menu");
  const [currentQuizTitle, setCurrentQuizTitle] = useState();
  const [score, setScore] = useState(0)
  const [questionBank, setQuestionBank] = useState()

  return (
    <div className="App">
      
      <h1>Quiz App</h1>
      <h2> {currentQuizTitle}</h2>
      <QuizContext.Provider value={{gameState, 
        setGameState, 
        score, 
        setScore, 
        questionBank, 
        setQuestionBank,
        currentQuizTitle, 
        setCurrentQuizTitle}}>

        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
