import React, {useContext} from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from '../helpers/QuestionBank';
function EndScreen(){
    const { score } = useContext(QuizContext);
    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score}/{Questions.length}</h3>
        </div>
    );
}
export default EndScreen;