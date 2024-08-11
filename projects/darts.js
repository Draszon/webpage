"use strict"

window.onload = function() {
  //input és kiírató mezők
  const firstPlayerName = document.getElementById("fplayer"); 
  const secondPlayerName = document.getElementById("splayer");
  const gameType = document.getElementById("gametype");

  const firstScore = document.getElementById("pfscore");
  const secondScore = document.getElementById("psscore");
  const thirdScore = document.getElementById("pftcore");

  const nameSubmitBtn = document.getElementById("game-start");
  const scoreSubmitBtn = document.getElementById("enter-score");

  const firstPlayerScoreField = document.getElementById("first-player-scores");
  const secondPlayerScoreField = document.getElementById("second-player-scores");
  
  const fPlayerScoreSumDisplay = document.getElementById("f-player-sum");
  const sPlayerScoreSumDisplay = document.getElementById("s-player-sum");

  const firstPlayerNameDisplay = document.getElementById("first-player");
  const secondPlayerNameDisplay = document.getElementById("second-player");

  nameSubmitBtn.addEventListener("click", function() {
    let playerOneScore = parseInt(gameType.value);
    let playerTwoScore = parseInt(gameType.value);
    document.getElementById("name-input").style.display = "none";
    document.getElementById("score-input").style.display = "block";

    firstPlayerNameDisplay.innerHTML = firstPlayerName.value;
    secondPlayerNameDisplay.innerHTML = secondPlayerName.value;
    fPlayerScoreSumDisplay.innerHTML = playerOneScore;
    sPlayerScoreSumDisplay.innerHTML = playerTwoScore;
  });
  
};