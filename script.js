/*
    Pseudocode

    A game of rock-paper-scissors with 5 rounds
    Request user for input 
    Randomly generate result and compare
    Keep track of the results

    Create variables for rock, paper, scissors
    Set count variable and set it to 5
    Create result variable

    While count is greater than 0
        Generate a random value (rock, paper, scissor)
        Prompt a request to user for input
        Validate the input
        If valid
            Compare the input with the generated value
            Append result 'win','lose','tie'
        Else 
            Append result 'error'
        End If
        output the result
        Minus one from count

    End while

    <-- Validate Function -->
    Convert the answer to lower case 
    Invalidate if the input isn't rock or paper or scissor

    <-- Generate Function -->
    Randomly generate a number (0, 1, 2)
    Assign rock, paper, scissors with 0, 1, 2 respectively
    Return the number

    <-- Compare Function -->
    
*/

/*
    Differences with odin project guideline

    I only looked up the logic and started myself so there's some differences.
    1. userInput is assigned from prompt directly instead of assigning via a function.
    2. result is shown as win, lose or draw rather than individual scores.
    3. the overall logic isn't wrapped with a function 
*/
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "win";
const LOSE = "lose";
const DRAW = "draw";

playGame();

function playGame() {
    let result = "";
    let count = 5;
    
    while (count > 0) {
        let choice = getComputerChoice();
        const userInput = getUserInput();
    
        if (!isValidInput(userInput)) {
            alert ("Invalid Input");
            continue;
        }
        
        result += compareTheInputs(userInput, choice) + " ";
        count--;
        console.log(result);
        // console.log(`User: ${userInput}, Computer: ${choice}`);
    }
    
}

function getUserInput() {
    return prompt("Which one u wanna pick? \n ('rock', 'paper', 'scissors'").toLowerCase();
}

function isValidInput(input) {
    return (input === "rock" || input === "paper" || input === "scissors");
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return ROCK;
            break;
        case 1:
            return PAPER;
            break;
        case 2:
            return SCISSORS;
            break;
    }
}

function compareTheInputs(userInput, computerInput) {
    if (userInput === ROCK) {
        if (computerInput === ROCK)
            return DRAW;
        else if (computerInput === PAPER)
            return LOSE;
        else
            return WIN;
    }
    else if (userInput === PAPER) {
        if (computerInput === ROCK) 
            return WIN;
        else if (computerInput === PAPER)
            return DRAW;
        else
            return LOSE;
    }
    else {
        if (computerInput === ROCK)
            return LOSE;
        else if (computerInput === PAPER)
            return WIN;
        else
            return DRAW;
    }
}