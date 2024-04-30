import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "../App.css"
import { Questions } from "../helpers/QuestionBank";
import { Questions2 } from "../helpers/QuestionBank2";
export default function MainMenu(){
    const {gameState, setGameState, setQuestionBank, setCurrentQuizTitle} = useContext(QuizContext)
    return (
        <div className="Menu">
            <button onClick={()=>{
                setGameState("quiz")
                setQuestionBank(Questions)
                setCurrentQuizTitle("Steins Gate Trivia")
            }}> Start Steins Gate Quiz</button>
            <button onClick={()=>{
                setGameState("quiz")
                setQuestionBank(Questions2)
                setCurrentQuizTitle("Fallout Trivia")
            }}> Start Fallout Quiz</button>
        </div>
    )
}