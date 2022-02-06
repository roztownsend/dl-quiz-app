
export const QuestionBank = [
    {
        prompt: "When you can't clearly see a stop bar, but you DO see a stop sign, where should you stop?",
        optionChoices: 
            [
                { option: "A little ways into the intersection, to show initiative.", isCorrect: false },
                { option: "You don't need to fully stop; a “California stop” (rolling slow-down) is fine.", isCorrect: false },
                { option: "At the stop sign.", isCorrect: false },
                { option: "Immediately before you would enter into the crossing road of the intersection.", isCorrect: true }
            ],
    },
    {
        prompt: "You are at a red light and there is a crosswalk. Someone is crossing the crosswalk, and they're still crossing when the light turns green. What should you do?",
        optionChoices: 
            [
                { option: "Wait for them cross.", isCorrect: true },
                { option: "Honk to hurry them along.", isCorrect: false },
                { option: "Start rolling the car toward them gently.", isCorrect: false },
                { option: "Proceed as normal - the pedestrian has a legal responsibility to get out of the way.", isCorrect: false },
            ],
    },
    {
        prompt: "You're driving fairly slowly, and you notice a line of cars is starting to form behind you. What should you do?",
        optionChoices: 
            [
                { option: "Drive normally, because I'm doing the speed limit.", isCorrect: false },
                { option: "Try to pull over when it's safe to let the other cars pass.", isCorrect: true},
                { option: "Speed up to make the drivers behind you happier.", isCorrect: false },
                { option: "Brake-check the car behind you to make sure they aren't following too closely.", isCorrect: false } 
            ],
    },
    {        
        prompt: "You’re going to tow a motorcycle to the nearest exit on a freeway/motorway. What’s the most important thing to remember?",
        optionChoices: 
            [
                { option: "Make sure the tow rope is marked if it is over three meters long.", isCorrect: false },
                { option: "Don’t drive over 20 km/h.", isCorrect: false },
                { option: "Make sure to mark the back of the motorcycle if the brake lights are out.", isCorrect: false },
                { option: "You can’t do this - it is prohibited to tow motorcycles.", isCorrect: true }
            ],
    },
    {
        prompt: "What is one reason learning from imitation could be bad as a learning technique?",
        optionChoices: 
            [
               { option: "You may imitate behavior that is illegal or unsafe.", isCorrect: true },
               { option: "You will irritate the other drivers by your imitation, potentially causing road rage.", isCorrect: false },
               { option: "You will not engage in deep learning by imitating others.", isCorrect: false },
               { option: "New drivers should never learn by imitation.", isCorrect: false }
            ],
    },
    {
        prompt: "When is it appropriate to use your horn?",
        optionChoices: 
            [
                { option: "When I need to communicate to other drivers I'm changing lanes.", isCorrect: false },
                { option: "When it's necessary to prevent imminent danger.", isCorrect: true },
                { option: "When another driver is being absolutely hilarious.", isCorrect: false },
                { option: "When I have a baby in the car and I need to entertain them.", isCorrect: false }
            ],
    },
    {
        prompt: "Where is one location you not allowed to stop?",
        optionChoices: 
            [
                { option: "In a tunnel.", isCorrect: true },
                { option: "On a carriageway/roadway next to a parked car.", isCorrect: false },
                { option: "On a major road.", isCorrect: false },
                { option: "Where there's a yellow dashed line on the curb.", isCorrect: false },
            ],
    },
    {
        prompt: "You have 0.1 mille of in your blood and you fail to stop at a stop sign. Can the police punish you for this?",
        optionChoices: 
            [
                { option: "Yes, but I can only get punished for running the stop sign.", isCorrect: false},
                { option: "Yes, and I can get punished for running the stop sign AND drunk driving.", isCorrect: true},
                { option: "No, because I was under the legal limit.", isCorrect: false },
                { option: "No, because I'm a new driver.", isCorrect: false }
            ],
    },
    {
        prompt: "A trailer is always considered light if the total weight is no greater than...",
        optionChoices: 
        [
            { option: "700 kg", isCorrect: false },
            { option: "901 kg", isCorrect: false },
            { option: "750 kg", isCorrect: true },
            { option: "It depends on the total weight of the car.", isCorrect: false }
        ],
    },
    {
        prompt: "You find a parking space next to another car in a crowded parking lot. You fit your car into the parking space, but you are so close to the next car that they can't get in their driver's side door. Did you park legally?",
        optionChoices: 
            [
                { option: "Technically, yes! My car is fully in the space.", isCorrect: false },
                { option: "Technically, yes! The car next to me is parked illegally becuase THEY are too close.", isCorrect: false },
                { option: "No, because I'm still blocking the next car.", isCorrect: true },
                { option: "No, because my passenger might damage the car next to me if they open the door.", isCorrect: false },
            ],
    },
]

export default QuestionBank;