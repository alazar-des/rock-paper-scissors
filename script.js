function computerPlay() {
    const selections = ["rock", "scissors", "paper"];
    return selections[Math.floor(Math.random() * 3)];
}

function playGround(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return ({
            message: `You won! ${playerSelection} beats ${computerSelection}`,
            won: 'player'
        });
    }
    else if  (playerSelection === computerSelection) {
        return ({
            message: `It's a tie! ${playerSelection} ties with ${computerSelection}`,
            won: 'none'
        });
    }
    else {
        return ({
            message: `You lose! ${playerSelection} is beaten by ${computerSelection}`,
            won: 'computer'
        });
    }
}

function game() {
    let playerScore = 0, computerScore = 0;
    const result = document.createElement('div');
    const btns = document.querySelectorAll('button');

    btns.forEach(btn => btn.addEventListener('click', e => {
        let score = playGround(e);
        if (score.won === 'player') {
            playerScore++;
        } else if (score.won === 'computer') {
            computerScore++;
        }

        result.textContent = score.message;

        if (playerScore === 5) {
            result.textContent = 'You won!';
            playerScore = 0, computerScore = 0;
        }
        else if (computerScore === 5) {
            result.textContent = 'You Lose!';
            playerScore = 0, computerScore = 0;
        }
        document.body.appendChild(result);
    }));
}

game();