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
    Improved Version
        Score is now set for both user and computer
        Game will be determined by who gets 5 wins first
        Add a UI
            Three buttons for each selection
    
    Psuedocode
        Create variable to keep track of scores (userScore and computerScore)
        While userScore and computerScore aren't equal to 5
            Get computer choice function
            Get user choice function

            Remove the function to check valid input
            Get match result function 
            Set score based on result and show the choices and results

        UI
            Create a div with three div child elements (rock, paper, scissors)
            Three elements will have two class names (respective names and choice)
            Style the three elements with space-around alignment
            Add some background color

        User choice function
            Create a nodeList containing three elements with querySelector
            Add event listener for each node
            return the text content of the clicked element node (case changed to lower case)

        
*/

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "win";
const LOSE = "lose";
const DRAW = "draw";
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".choice");
const resultPanel = document.querySelector(".result-panel");

if (buttons) {
    for (let button of buttons) {
        button.addEventListener("click", playRound);
    }
}

function playRound(event) {
    let roundResult = "";
    let userChoice, computerChoice;

    userChoice = event.target.textContent.toLowerCase();
    computerChoice = getComputerChoice();
    roundResult = getMatchResult(userChoice, computerChoice);
    resultPanel.textContent = `You chose ${userChoice} and Computer chose ${computerChoice}.`;
    if (roundResult === WIN) {
        userScore++;
        resultPanel.append(`\nYou Win This round.`);                        
    }
    else if (roundResult === LOSE) {
        computerScore++;
        resultPanel.append(`\nYou Lose this round.`);
    }
    else {
        resultPanel.append(`\nThe result is Draw.`);        
    }
    let scoreBoard = `\nCurrent Score: User - ${userScore} and Computer - ${computerScore}.`;
    resultPanel.append(scoreBoard);
    
    if (winGame(userScore)) {
        resultPanel.append("\nCongratulation. You Win.");
        removeEventListener("click", playRound);
    }
    else if (winGame(computerScore)) {
        resultPanel.append("\nGame over");
        removeEventListener("click", playRound);
    }
}

function removeEventListener(event, functionAdded) {
    buttons.forEach( (button) => {
        button.removeEventListener(event, functionAdded);
    });
}

function endGame(userScore, computerScore) {
    return userScore === 5 || computerScore === 5;
}

function winGame(score) {
    return score === 5;
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

function getMatchResult(userChoice, computerChoice) {
    if (userChoice === ROCK) {
        if (computerChoice === ROCK)
            return DRAW;
        else if (computerChoice === PAPER)
            return LOSE;
        else
            return WIN;
    }
    else if (userChoice === PAPER) {
        if (computerChoice === ROCK) 
            return WIN;
        else if (computerChoice === PAPER)
            return DRAW;
        else
            return LOSE;
    }
    else {
        if (computerChoice === ROCK)
            return LOSE;
        else if (computerChoice === PAPER)
            return WIN;
        else
            return DRAW;
    }
}