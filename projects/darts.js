"use strict";

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.scoreHistory = [];
  }

  updateScore(point) {
    const pscore = this.score - point;
    if (pscore < 0) {
      this.score = this.score;
    } else {
      this.score = pscore;
    }
    this.scoreHistory.push(point);
  }

  hasWon() {
    if (this.score === 0) {
      return true;
    }
  }
}

class Game {
  constructor(firstPlayerName, secondPlayerName, gameType) {
    this.firstPlayer = new Player(firstPlayerName, gameType);
    this.secondPlayer = new Player(secondPlayerName, gameType);
    this.currentPlayer = this.firstPlayer;
    this.nextPlayer = this.secondPlayer;
  }

  //minden a három dobás eredményére meghívom a függvényt ami 
  //ellenőrzi milyen az eredmény és átalakítja annak megfelelően
  parseScore(score) {
    let multiplier = 1;
    if (score[0] === 'd') {
      multiplier = 2;
    } else if (score[0] === 't') {
      multiplier = 3;
    } else {
      return parseInt(score);
    }
    return parseInt(score.slice(1)) * multiplier;
  }

  scorecaltulator(firsts, seconds, thirds) {
    return this.parseScore(firsts) + this.parseScore(seconds) + this.parseScore(thirds);
  }

  //az adott felhasználó dobás eredményeire meghívja a pontszámító függvényt
  //utána pedig frissíti a játékos pontjait
  updatePlayerCurrentScore(firsts, seconds, thirds) {
    const currentScore = this.scorecaltulator(firsts, seconds, thirds);
    this.currentPlayer.updateScore(currentScore);
    return currentScore;
  }

  playerSwitch() {
    [this.currentPlayer, this.nextPlayer] = [this.nextPlayer, this.currentPlayer];
  }

  winCheck() {
    if (this.currentPlayer.hasWon()) {
      alert(`Gratulálok ${this.currentPlayer.name}, megnyerted a játékod!`);
      location.reload();
    }
  }
}

window.onload = function() {
  const firstPlayerNameDisplay = document.getElementById('first-player');
  const secondPlayerNameDisplay = document.getElementById('second-player');
  
  const firstPlayerScoreDisplay = document.getElementById('first-player-scores');
  const secondPlayerScoreDisplay = document.getElementById('second-player-scores');

  const firstPlayerSumDisplay = document.getElementById('f-player-sum');
  const secondPLayerSumDisplay = document.getElementById('s-player-sum');

  const firstPlayerNameInput = document.getElementById('fplayer');
  const secondPlayerNameInput = document.getElementById('splayer');
  const gameTypeInput = document.getElementById('gametype');

  const playerFirstScoreInput = document.getElementById('fscore');
  const playerSecondScoreInput = document.getElementById('sscore');
  const playerThirdScoreInput = document.getElementById('tscore');

  const gameStartBtn = document.getElementById('game-start');
  const scoreAddBtn = document.getElementById('enter-score');

  function checkNameField() {
    if (firstPlayerNameInput.value.trim() === "" || secondPlayerNameInput.value.trim() === "" || gameTypeInput.value.trim() === "") {
      gameStartBtn.disabled = true;
    } else {
      gameStartBtn.disabled = false;
    }
  }

  function checkScoreField() {
    if (playerFirstScoreInput.value.trim() === "" || playerSecondScoreInput.value.trim() === "" || playerThirdScoreInput.value.trim() === "") {
      scoreAddBtn.disabled = true;
    } else {
      scoreAddBtn.disabled = false;
    }
  }

  firstPlayerNameInput.addEventListener("input", checkNameField);
  secondPlayerNameInput.addEventListener("input", checkNameField);
  gameTypeInput.addEventListener("input", checkNameField);

  playerFirstScoreInput.addEventListener("input", checkScoreField);
  playerSecondScoreInput.addEventListener("input", checkScoreField);
  playerThirdScoreInput.addEventListener("input", checkScoreField);

  //mezők kezdeti ellenőrzése
  checkNameField();
  checkScoreField();

  gameStartBtn.addEventListener("click", function() {
    if (gameTypeInput.value.trim() != 301 && gameTypeInput.value.trim() != 501) {
      alert("A játék típusa csak 301 vagy 501 lehet!");
    } else {
      const game = new Game(firstPlayerNameInput.value, secondPlayerNameInput.value, gameTypeInput.value);
      
      document.getElementById("name-input").style.display = "none";
      document.getElementById("score-input").style.display = "block";

      firstPlayerNameDisplay.innerHTML = game.firstPlayer.name;
      secondPlayerNameDisplay.innerHTML = game.secondPlayer.name;
      firstPlayerSumDisplay.innerHTML = game.firstPlayer.score;
      secondPLayerSumDisplay.innerHTML = game.secondPlayer.score;
      
      scoreAddBtn.addEventListener("click", function() {
        const currentScore = game.updatePlayerCurrentScore(
          playerFirstScoreInput.value.toLowerCase(),
          playerSecondScoreInput.value.toLowerCase(),
          playerThirdScoreInput.value.toLowerCase()
        );
        
        if (game.currentPlayer === game.firstPlayer) {
          firstPlayerScoreDisplay.innerHTML += `<li>${currentScore}</li>`;
          firstPlayerSumDisplay.innerHTML = game.firstPlayer.score;
        } else {
          secondPlayerScoreDisplay.innerHTML += `<li>${currentScore}</li>`;
          secondPLayerSumDisplay.innerHTML = game.secondPlayer.score;
        }

        game.winCheck();
        game.playerSwitch();
        playerFirstScoreInput.value = "";
        playerSecondScoreInput.value = "";
        playerThirdScoreInput.value = "";
      });
    }
  });
}