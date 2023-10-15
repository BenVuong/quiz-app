import React, {useState, useContext} from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from '../helpers/QuestionBank'
import "../App.css"
 function Quiz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")
    const { score, setScore } = useContext(QuizContext);
    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == optionChosen)
        {
            setScore(score+1);
        }
    }
    return (
        
        <div className="Quiz"> 
            <h1>
                {Questions[currentQuestion].prompt}
            </h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}> {Questions[currentQuestion].optionA} {" "}</button>
                <button onClick={() => setOptionChosen("B")}> {Questions[currentQuestion].optionB} {" "}</button>
                <button onClick={() => setOptionChosen("C")}> {Questions[currentQuestion].optionC} {" "}</button>
                <button onClick={() => setOptionChosen("D")}> {Questions[currentQuestion].optionD} {" "}</button>
            </div>

            <button>Next Question</button>
        </div>
    )
}

export default Quiz;