function computerPlay() {
    const selections = ["rock", "scissors", "paper"];
    return selections[Math.floor(Math.random() * 3)];
}

function playGround(playerSelection, computerSelection) {
    const selections = ["rock", "scissors", "paper"];
    let playerSelectionIndex = selections.indexOf(playerSelection);
    let computerSelectionIndex = selections.indexOf(computerSelection);
    if (playerSelection === computerSelection)
        return `It's a tie! ${playerSelection} ties with ${computerSelection}`
    else if (playerSelectionIndex - computerSelectionIndex === -1 ||
        playerSelectionIndex - computerSelectionIndex === 2)
        return `You won! ${playerSelection} beats ${computerSelection}`
    else
        return `You lose! ${playerSelection} is beaten by ${computerSelection}`
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please select b/n rock, scissors or paper", "rock").toLowerCase();
        if (playerSelection != 'rock' && 
            playerSelection != 'scissors' &&
            playerSelection != 'paper') {
            i--;
            continue;
        }
        console.log(playGround(playerSelection, computerPlay()));
    }
}

game();