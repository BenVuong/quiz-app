import React, {useContext} from "react";
import { QuizContext} from "../helpers/Contexts";
import "../App.css"
function EndScreen(){
    const { score, setScore, setGameState, questionBank } = useContext(QuizContext);
    const restartQuiz = () =>
    {
        setScore(0)
        setGameState("menu")
    }
    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score}/{questionBank.length}</h3>
            <button  onClick={restartQuiz}>
                Restart
            </button>
        </div>
    );
}
export default EndScreen;