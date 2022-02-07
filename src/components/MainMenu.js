import { useContext } from "react";
import Context from "./Context";
import "../App.css";
import car from "../images/intro-pic.jpg";

export default function MainMenu() {
    const { setGameState } = useContext(Context);
    return <div className="Menu Menu__intro">
        <div className="intro__blurb">
                <img alt="a man sitting at the steering wheel of a car" src={car} />
                
                <h2 className="smaller">
                    This quiz corresponds to Chapter 1 and the "traffic rules" section of the 2021 edition of Körkortsboken på Engelska by Svea Trafikutbildning. The book is primarily written in British English - I've added American English terms as well for the sake of convenience.
                </h2>
                <p>
                    The quiz has 10 questions.
                </p>
                <button className="start" onClick={() => {setGameState("quiz")}}>Start the quiz!</button>
        </div>
        </div>;
}

