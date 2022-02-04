import React, { useState, useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/QuestionBank";

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    function nextQuestion() {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
            alert(`That's right! Your current score is ${score}.`);
            setCurrentQuestion(currentQuestion + 1);
        } else {
            alert(`Oops! That's not right. Your current score is ${score}.`);
            setCurrentQuestion(currentQuestion + 1);
        };
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
            alert(`That's right! Your current score is ${score}.`);
            setGameState("endgame");
        } else {
            alert(`Oops! That's not right. Your current score is ${score}.`);
            setGameState("endgame");
        };
    };

    return (
        <div className="Quiz">
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className="options">
            <button onClick={() => setOptionChosen("A")}>
                { Questions[currentQuestion].optionA }</button>
            <button onClick={() => setOptionChosen("B")}>
                { Questions[currentQuestion].optionB }</button>
            <button onClick={() => setOptionChosen("C")}>
                { Questions[currentQuestion].optionC }</button>
            <button onClick={() => setOptionChosen("D")}>
                { Questions[currentQuestion].optionD }</button>
        </div>

        {currentQuestion === Questions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
            <button onClick={nextQuestion}>Next Question</button>
        )}
        </div>
    )
}

export default Quiz;