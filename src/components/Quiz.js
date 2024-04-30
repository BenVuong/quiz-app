import React, {useState, useContext, useEffect} from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from '../helpers/QuestionBank'
import { Questions2 } from "../helpers/QuestionBank2";
import "../App.css"
 function Quiz(){
    const data = 1
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")
    const { score, setScore, setGameState, questionBank} = useContext(QuizContext);

    

    const nextQuestion = () => {
       
      
        if (questionBank[currentQuestion].answer == optionChosen)
        {
            setScore(score+1);
        }
        setCurrentQuestion(currentQuestion+1)    
    
    }
    
    const finishQuiz = () =>{
       

        
        if (questionBank[currentQuestion].answer == optionChosen)
        {
            setScore(score+1);
        }
        setGameState("endScreen");
      
    }
    return (
        
        <div className="Quiz"> 
            <h1>
                {questionBank[currentQuestion].prompt}
            </h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}> {questionBank[currentQuestion].optionA} {" "}</button>
                <button onClick={() => setOptionChosen("B")}> {questionBank[currentQuestion].optionB} {" "}</button>
                <button onClick={() => setOptionChosen("C")}> {questionBank[currentQuestion].optionC} {" "}</button>
                <button onClick={() => setOptionChosen("D")}> {questionBank[currentQuestion].optionD} {" "}</button>
            </div>

            {currentQuestion == questionBank.length-1 ?(
                <button onClick={finishQuiz}> Finish Quiz</button>
            ):
            (
                <button onClick={nextQuestion}>Next Question</button>
            )}

            
        </div>
    )
}

export default Quiz;