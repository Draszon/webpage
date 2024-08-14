"use strict";

const projectIndex = document.getElementById("project-index");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectLink = document.querySelector(".project-link");

const gameMinus = document.getElementById("game-minus");
const gamePlus = document.getElementById("game-plus");

const games = {
  indexImg: [
    "/assets/images/jsProjectIndex/tic-tac-toe-game.svg",
    "/assets/images/jsProjectIndex/rock-paper-scissors.png",
    "/assets/images/jsProjectIndex/hangman.svg",
    "/assets/images/jsProjectIndex/black-jack.svg",
    "/assets/images/jsProjectIndex/legyen ön is milliomos.png",
    "/assets/images/jsProjectIndex/dart-board.svg"
  ],
  name: [
    "Tic-Tac-Toe",
    "Kő Papír Olló",
    "Akasztófa",
    "Black Jack",
    "Legyen Őn is Milliomos",
    "Darts"
  ],
  description: [
    "TicTacToe A Blackjack egy klasszikus kártyajáték, ahol a célod, hogy kártyáid összértéke minél közelebb legyen a 21-hez, anélkül, hogy túllépnéd. A játékban a játékos és az osztó versenyeznek egymással. HTML, CSS és JavaScript segítségével készítettem el ezt a játékot: a HTML biztosítja a struktúrát, a CSS a megjelenést, míg a JavaScript a játék logikáját és interaktivitását kezeli.",
    "Kő papír olló Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum justo at ex fringilla bibendum. Nullam maximus arcu a volutpat tincidunt.",
    "Akasztófa Vestibulum ultrices tortor sapien, in luctus est dictum in. Vivamus non aliquet enim. Nunc a vestibulum tortor.",
    "Black Jack Quisque ornare mi ligula, non eleifend neque luctus at. Mauris lectus mi, luctus bibendum ullamcorper id, tempor eu massa. ",
    "Legyen ön is milliomos aliquam feugiat nibh non mattis. In egestas erat enim, et pretium dui congue non. Praesent pulvinar tincidunt eros vel rutrum.",
    "Darts Curabitur semper ligula lacus, sed finibus lacus tristique eget. Etiam et tellus et elit malesuada malesuada.",
  ],
  link: [
    "/projects/tictactoe.html",
    "/projects/rockpaperscissor.html",
    "/projects/hangman.html",
    "/projects/blackjack.html",
    "/projects/millionaire.html",
    "/projects/darts.html"
  ]
};

function change(index, title, description, link, count) {
  index.src = games.indexImg[count];
  title.innerText = games.name[count];
  description.innerText  = games.description[count];
  link.href = games.link[count];
  console.log(count);
}

let counter = 0;
change(projectIndex, projectTitle, projectDescription, projectLink, counter);

gamePlus.addEventListener("click", function() {
  counter ++;
  if(counter > 5) {
    counter = 0;
  }
  change(projectIndex, projectTitle, projectDescription, projectLink, counter);
});

gameMinus.addEventListener("click", function() {
  counter --;
  if(counter < 0) {
    counter = 5;
  }
  change(projectIndex, projectTitle, projectDescription, projectLink, counter);
});