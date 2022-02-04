import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";

function EndGame() {
    const { setGameState } = useContext(QuizContext);

    return (
        <>
        <div>Keep Studying!</div>
        <button onClick={() => {setGameState("menu")}}>Try again</button>
        </>
    )
}

export default EndGame;