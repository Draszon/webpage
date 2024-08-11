const playerScoreDisplay = document.getElementById('player-score');
const pcScoreDisplay = document.getElementById('pc-score');

const pcRock = document.getElementById('pc-rock');
const pcPaper = document.getElementById('pc-paper');
const pcScissor = document.getElementById('pc-scissor');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissor = document.getElementById('player-scissor');

const resultText = document.getElementById('result');

let playerScoreCounter = 0;
let pcScoreCounter = 0;

function pcScoreGenerator() {
    const value = Math.floor(Math.random() * (4 - 1) +1);
    return value;
}

function pcHighlightIcon(pcScoreValue) {
    switch(pcScoreValue) {
        case 1:
            pcRock.style.color = 'white';
            break;
        case 2:
            pcPaper.style.color = 'white';
            break;
        case 3:
            pcScissor.style.color = 'white';
            break;
    }
}

function winLooseCheck(pcScore, playerScore) {
    
    if(pcScore === 1 && playerScore === 1 || pcScore === 2 && playerScore === 2 || pcScore === 3 && playerScore === 3) {
        resultText.textContent = 'Döntetlen!';
    } else if(playerScore === 1 && pcScore === 3 || playerScore === 2 && pcScore === 1 || playerScore === 3 && pcScore === 2) {
        resultText.textContent = 'Gratulálok nyertél!!';
        playerScoreCounter += 1;
        playerScoreDisplay.textContent = playerScoreCounter;
    } else if(playerScore === 1 && pcScore === 2 || playerScore === 2 && pcScore === 3 || playerScore === 3 && pcScore === 1) {
        resultText.textContent = 'A gép nyert!';
        pcScoreCounter += 1;
        pcScoreDisplay.textContent = pcScoreCounter;
    }
}

function boardClear() {
    setTimeout(function() {
        playerRock.style.color = 'hsl(0, 0%, 60%)';
        playerPaper.style.color = 'hsl(0, 0%, 60%)';
        playerScissor.style.color = 'hsl(0, 0%, 60%)';

        pcRock.style.color = 'hsl(0, 0%, 60%)';
        pcPaper.style.color = 'hsl(0, 0%, 60%)';
        pcScissor.style.color = 'hsl(0, 0%, 60%)';

        resultText.textContent = '';
    }, 1500);
}



playerRock.addEventListener('click', () => {
    let pcScore = pcScoreGenerator();
    pcHighlightIcon(pcScore);
    playerRock.style.color = 'white';
    winLooseCheck(pcScore, 1);
    boardClear();
});

playerPaper.addEventListener('click', () => {
    let pcScore = pcScoreGenerator();
    pcHighlightIcon(pcScore);
    playerPaper.style.color = 'white';
    winLooseCheck(pcScore, 2);
    boardClear();
});

playerScissor.addEventListener('click', () => {
    let pcScore = pcScoreGenerator();
    pcHighlightIcon(pcScore);
    playerScissor.style.color = 'white';
    winLooseCheck(pcScore, 3);
    boardClear();
});