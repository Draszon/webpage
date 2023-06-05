const clubs = new Array();
const diamonds = new Array();
const hearts = new Array();
const spades = new Array();

clubs[0] = new Image();
clubs[0].src = 'assets/clubs/clubsA.png';
clubs[1] = new Image();
clubs[1].src = 'assets/clubs/clubs2.png';
clubs[2] = new Image();
clubs[2].src = 'assets/clubs/clubs3.png';
clubs[3] = new Image();
clubs[3].src = 'assets/clubs/clubs4.png';
clubs[4] = new Image();
clubs[4].src = 'assets/clubs/clubs5.png';
clubs[5] = new Image();
clubs[5].src = 'assets/clubs/clubs6.png';
clubs[6] = new Image();
clubs[6].src = 'assets/clubs/clubs7.png';
clubs[7] = new Image();
clubs[7].src = 'assets/clubs/clubs8.png';
clubs[8] = new Image();
clubs[8].src = 'assets/clubs/clubs9.png';
clubs[9] = new Image();
clubs[9].src = 'assets/clubs/clubs10.png';
clubs[10] = new Image();
clubs[10].src = 'assets/clubs/clubsJ.png';
clubs[11] = new Image();
clubs[11].src = 'assets/clubs/clubsQ.png';
clubs[12] = new Image();
clubs[12].src = 'assets/clubs/clubsK.png';

diamonds[0] = new Image();
diamonds[0].src = 'assets/diamonds/diamondsA.png';
diamonds[1] = new Image();
diamonds[1].src = 'assets/diamonds/diamonds2.png';
diamonds[2] = new Image();
diamonds[2].src = 'assets/diamonds/diamonds3.png';
diamonds[3] = new Image();
diamonds[3].src = 'assets/diamonds/diamonds4.png';
diamonds[4] = new Image();
diamonds[4].src = 'assets/diamonds/diamonds5.png';
diamonds[5] = new Image();
diamonds[5].src = 'assets/diamonds/diamonds6.png';
diamonds[6] = new Image();
diamonds[6].src = 'assets/diamonds/diamonds7.png';
diamonds[7] = new Image();
diamonds[7].src = 'assets/diamonds/diamonds8.png';
diamonds[8] = new Image();
diamonds[8].src = 'assets/diamonds/diamonds9.png';
diamonds[9] = new Image();
diamonds[9].src = 'assets/diamonds/diamonds10.png';
diamonds[10] = new Image();
diamonds[10].src = 'assets/diamonds/diamondsJ.png';
diamonds[11] = new Image();
diamonds[11].src = 'assets/diamonds/diamondsQ.png';
diamonds[12] = new Image();
diamonds[12].src = 'assets/diamonds/diamondsK.png';

hearts[0] = new Image();
hearts[0].src = 'assets/hearts/heartA.png';
hearts[1] = new Image();
hearts[1].src = 'assets/hearts/heart2.png';
hearts[2] = new Image();
hearts[2].src = 'assets/hearts/heart3.png';
hearts[3] = new Image();
hearts[3].src = 'assets/hearts/heart4.png';
hearts[4] = new Image();
hearts[4].src = 'assets/hearts/heart5.png';
hearts[5] = new Image();
hearts[5].src = 'assets/hearts/heart6.png';
hearts[6] = new Image();
hearts[6].src = 'assets/hearts/heart7.png';
hearts[7] = new Image();
hearts[7].src = 'assets/hearts/heart8.png';
hearts[8] = new Image();
hearts[8].src = 'assets/hearts/heart9.png';
hearts[9] = new Image();
hearts[9].src = 'assets/hearts/heart10.png';
hearts[10] = new Image();
hearts[10].src = 'assets/hearts/heartJ.png';
hearts[11] = new Image();
hearts[11].src = 'assets/hearts/heartQ.png';
hearts[12] = new Image();
hearts[12].src = 'assets/hearts/heartK.png';

spades[0] = new Image();
spades[0].src = 'assets/spades/spadesA.png';
spades[1] = new Image();
spades[1].src = 'assets/spades/spades2.png';
spades[2] = new Image();
spades[2].src = 'assets/spades/spades3.png';
spades[3] = new Image();
spades[3].src = 'assets/spades/spades4.png';
spades[4] = new Image();
spades[4].src = 'assets/spades/spades5.png';
spades[5] = new Image();
spades[5].src = 'assets/spades/spades6.png';
spades[6] = new Image();
spades[6].src = 'assets/spades/spades7.png';
spades[7] = new Image();
spades[7].src = 'assets/spades/spades8.png';
spades[8] = new Image();
spades[8].src = 'assets/spades/spades9.png';
spades[9] = new Image();
spades[9].src = 'assets/spades/spades10.png';
spades[10] = new Image();
spades[10].src = 'assets/spades/spadesJ.png';
spades[11] = new Image();
spades[11].src = 'assets/spades/spadesQ.png';
spades[12] = new Image();
spades[12].src = 'assets/spades/spadesK.png';

// mezők bekérése
let playerFirstCard = document.getElementById('player1');
let playerSecondCard = document.getElementById('player2');
let displayFistCard = document.getElementById('card1');
let displaySecondCard = document.getElementById('card2');
let displayThirdCard = document.getElementById('card3');
let displayFourthCard = document.getElementById('card4');
let playerScoreDisplay = document.getElementById('player-score-display');
let pcScoreDisplay = document.getElementById('pc-score-display');
let winLooseDisplay = document.getElementById('win-loose');

let firstCardSrc = displayFistCard.getAttribute('src');
let secondCardSrc = displaySecondCard.getAttribute('src');
let thirdCardSrc = displayThirdCard.getAttribute('src');
let fourthCardSrc = displayFourthCard.getAttribute('src');

function randomDeck() {
    return Math.floor(Math.random() * 4);
}

function randomCard() {
    return Math.floor(Math.random() * 12);
}

let deckNumber = 0;
let cardNumber = 0;
// a játékos és gép kezdőértéke
let playerValue = 0;
let computerValue = Math.floor(Math.random() * (27 - 17) + 17);

// hozzáadja a játékos pontjaihoz az aktuális pontokat az osztott lap alapján
const playerScoreCalculator = (() => {
    function calculator (value) {
        switch (value) {
            case 0:
                if (playerValue <= 10) {
                    playerValue += 11;
                } else {
                    playerValue += 1;
                }
                break;
            case 1:
                playerValue += 2;
                break;
            case 2:
                playerValue += 3;
                break;
            case 3:
                playerValue += 4;
                break;
            case 4:
                playerValue += 5;
                break;
            case 5:
                playerValue += 6;
                break;
            case 6:
                playerValue += 7;
                break;
            case 7:
                playerValue += 8;
                break;
            case 8:
                playerValue += 9;
                break;
            case 9:
                playerValue += 10;
                break;
            case 10:
                playerValue += 10;
                break;
            case 11:
                playerValue += 10;
                break;
            case 12:
                playerValue += 10;
                break;
        }
    }
    return calculator;
})();

const winLooseCheckBasic = (() => {
    function check (pScore, pcScore) {
        if (pScore === 21 && pcScore > 21) {
            winLooseDisplay.innerHTML = 'Gratulálok, nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore === 21 && pcScore < 21) {
            winLooseDisplay.innerHTML = 'Gratulálok, nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore === 21 && pcScore === 21) {
            winLooseDisplay.innerHTML = 'Döntetlen!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore === 21 && pScore < 21) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore === 21 && pScore > 21) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore > 21 && pcScore < 21) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore > 21 && pScore > 21) {
            winLooseDisplay.innerHTML = 'Döntetlen!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        }
    }
    return check;
})();

const winLooseCheck = (() => {
    function check (pScore, pcScore) {
        if (pScore === 21 && pcScore < 21) {
            winLooseDisplay.innerHTML = 'Gratulálok, nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore === 21 && pcScore > 21) {
            winLooseDisplay.innerHTML = 'Gratulálok, nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore < 21 && pcScore > 21) {
            winLooseDisplay.innerHTML = 'Gratulálok, nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore == 21 && pScore < 21) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore == 21 && pScore > 21) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore < 21 && pScore > 21) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore < 21 && pcScore < 21 && pScore > pcScore) {
            winLooseDisplay.innerHTML = 'Gratulálok, nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pScore < 21 && pcScore < 21 && pScore < pcScore) {
            winLooseDisplay.innerHTML = 'Sajnos most nem nyertél!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore === pScore) {
            winLooseDisplay.innerHTML = 'Döntetlen!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        } else if (pcScore > 21 && pScore > 21) {
            winLooseDisplay.innerHTML = 'Döntetlen!';
            document.getElementById('card0').style.visibility = 'hidden';
            pcScoreDisplay.style.visibility = 'visible';
        }
    }
    return check;
})();

// keződállapot beállítása, a játékosnak és a gépnek két lap osztása
// értékek kiszámítása
const startTable = (() => {
    function startTableF () {
        deckNumber = randomDeck();
        cardNumber = randomCard();

        switch (deckNumber) {
            case 0:
                playerFirstCard.src = clubs[cardNumber].src;
                break;
            case 1:
                playerFirstCard.src = diamonds[cardNumber].src;
                break;
            case 2:
                playerFirstCard.src = hearts[cardNumber].src;
                break;
            case 3:
                playerFirstCard.src = spades[cardNumber].src;
                break;
        }
        playerScoreCalculator(cardNumber);

        deckNumber = randomDeck();
        cardNumber = randomCard();
    
        // oszt két random lapot a játékosnak, ha a második lap megegyezik
        // az előzővel, akkor újat kap, kiszámolja a pontjait és 
        // megjeleníti a lapokat
        switch (deckNumber) {
            case 0:
                while (playerFirstCard.src === clubs[cardNumber].src) {
                    cardNumber = randomCard();
                }
                playerScoreCalculator(cardNumber);
                playerSecondCard.src = clubs[cardNumber].src;
                break;
            case 1:
                while (playerFirstCard.src === diamonds[cardNumber].src) {
                    cardNumber = randomCard();
                }
                playerScoreCalculator(cardNumber);
                playerSecondCard.src = diamonds[cardNumber].src;
                break;
            case 2:
                while (playerFirstCard.src === hearts[cardNumber].src) {
                    cardNumber = randomCard();
                }
                playerScoreCalculator(cardNumber);
                playerSecondCard.src = hearts[cardNumber].src;
                break;
            case 3:
                while (playerFirstCard.src === spades[cardNumber].src) {
                    cardNumber = randomCard();
                }
                playerScoreCalculator(cardNumber);
                playerSecondCard.src = spades[cardNumber].src;
                break;
        }
        document.getElementById('pc1').src = 'assets/cards_back.png';
        document.getElementById('pc2').src = 'assets/cards_back.png';
    }
    return startTableF;
})();

// oldal betöltésekor meghívja a kezdő függvényt
startTable();
winLooseCheckBasic(playerValue, computerValue);


pcScoreDisplay.innerHTML = computerValue;
playerScoreDisplay.innerHTML = playerValue;

// új játék gombnál újratölti az oldalt
document.getElementById('new-game').addEventListener('click', () => {
    location.reload();
});

let deckClickCounter = 0
// paklira kattintás, új lap leosztása az asztalra
document.getElementById('card0').addEventListener('click', () => {
    deckClickCounter += 1;
    switch (deckClickCounter) {
        case 1:
            deckNumber = randomDeck();
            cardNumber = randomCard();
            switch (deckNumber) {
                case 0:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displayFistCard.src = clubs[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFistCard.style.visibility = 'visible';
                    break;
                case 1:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displayFistCard.src = diamonds[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFistCard.style.visibility = 'visible';
                    break;
                case 2:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displayFistCard.src = hearts[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFistCard.style.visibility = 'visible';
                    break;
                case 3:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displayFistCard.src = spades[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFistCard.style.visibility = 'visible';
                    break;
            }
            break;
        case 2:
            deckNumber = randomDeck();
            cardNumber = randomCard();
            switch (deckNumber) {
                case 0:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displaySecondCard.src = clubs[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displaySecondCard.style.visibility = 'visible';
                    break;
                case 1:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displaySecondCard.src = diamonds[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displaySecondCard.style.visibility = 'visible';
                    break;
                case 2:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displaySecondCard.src = hearts[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displaySecondCard.style.visibility = 'visible';
                    break;
                case 3:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src) {
                        cardNumber = randomCard();
                    }
                    displaySecondCard.src = spades[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displaySecondCard.style.visibility = 'visible';
                    break;
            }
            break;
        case 3:
            deckNumber = randomDeck();
            cardNumber = randomCard();
            switch (deckNumber) {
                case 0:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayThirdCard.src = clubs[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayThirdCard.style.visibility = 'visible';
                    break;
                case 1:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayThirdCard.src = diamonds[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayThirdCard.style.visibility = 'visible';
                    break;
                case 2:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayThirdCard.src = hearts[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayThirdCard.style.visibility = 'visible';
                    break;
                case 3:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayThirdCard.src = spades[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayThirdCard.style.visibility = 'visible';
                    break;
            }
            break;
        case 4:
            deckNumber = randomDeck();
            cardNumber = randomCard();
            switch (deckNumber) {
                case 0:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber] || displayThirdCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayFourthCard.src = clubs[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFourthCard.style.visibility = 'visible';
                    break;
                case 1:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber] || displayThirdCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayFourthCard.src = diamonds[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFourthCard.style.visibility = 'visible';
                    break;
                case 2:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber] || displayThirdCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayFourthCard.src = hearts[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFourthCard.style.visibility = 'visible';
                    break;
                case 3:
                    while (playerFirstCard.src === clubs[cardNumber].src || playerSecondCard ===  clubs[cardNumber].src || displayFistCard === clubs[cardNumber].src || displaySecondCard === clubs[cardNumber] || displayThirdCard === clubs[cardNumber]) {
                        cardNumber = randomCard();
                    }
                    displayFourthCard.src = spades[cardNumber].src;
                    playerScoreCalculator(cardNumber);
                    winLooseCheckBasic(playerValue, computerValue);
                    playerScoreDisplay.innerHTML = playerValue;
                    displayFourthCard.style.visibility = 'visible';
                    break;
            }
            break;
    }
});

document.getElementById('stop').addEventListener('click', () => {
    winLooseCheck(playerValue, computerValue);
    pcScoreDisplay.style.visibility = 'visible';
});