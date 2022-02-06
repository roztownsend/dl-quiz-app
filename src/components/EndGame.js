import { useContext } from "react";
import Context from "./Context";

function EndGame() {
  const { setGameState } = useContext(Context);
    
    return (
        <div className="Menu">
        <div className="end__blurb">That's the end of the quiz. Keep Studying!
        <button onClick={() => {setGameState("menu")}}>Try again</button>
        </div>
        </div>
    )
}

export default EndGame;