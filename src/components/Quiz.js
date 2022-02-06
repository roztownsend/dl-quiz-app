import { useState, useContext } from "react";
import Context from "./Context";
import QuestionBank from "./QuestionBank";

function Quiz() {
    const { setGameState } = useContext(Context);
    const [ score, setScore ] = useState(0);
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const answerHandler = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
            alert(`That's correct!`)
        } else {
            alert(`Oops, that's not correct.`)
        };

    const nextQuestion = currentQuestion + 1; 
        if (nextQuestion < QuestionBank.length) {
            setCurrentQuestion(nextQuestion);            
        } else {
            setGameState("endgame");
        };
    }

    return (
        <div className="Quiz">
            <div className="score">Current Score: {score}
            </div>
            <div className="question-pane">
                <div className="prompt">
                    <h2>{QuestionBank[currentQuestion].prompt}</h2>
                </div>
                <div className="options">
                    {
                        QuestionBank[currentQuestion].optionChoices.map((optionChoices, index) => (
                    <button onClick={() => answerHandler(optionChoices.isCorrect)} key={index}>{optionChoices.option}
                    </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Quiz;