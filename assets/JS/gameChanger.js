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
    "A két játékos hagyományosan X és O alakú jelekkel (bábukkal) játszik. A 3×3 mezőből álló táblára felváltva teszik le a jeleiket, bármelyik még szabad mezőre. Az nyer, akinek sikerül egy vonalban 3 jelet elhelyeznie, vízszintes, függőleges vagy átlós irányban. ",
    "A játékosok hangosan háromig számolnak vagy a játék nevét, a kő – papír – olló-t mondják, minden számolásnál meglendítve a felemelt és ökölbe szorított kezüket. A harmadik számolás közben vagy az utána következő ütemben a játékosok kezükkel felveszik a három alakzat egyikét és megmutatják az ellenfelüknek.",
    "A találgató játékos javasol egy betűt, mely ha szerepel a kitalálandó szóban, a betű helyének megfelelő vonalakra ráírásra kerül. Amennyiben a betű nem szerepel a kitalálandó szóban, úgy egy stilizált akasztófa egy része kerül lerajzolásra.",
    "A Blackjack egy klasszikus kártyajáték, ahol a célod, hogy kártyáid összértéke minél közelebb legyen a 21-hez, anélkül, hogy túllépnéd. A játékban a játékos és az osztó versenyeznek egymással.",
    "A Legyen Ön is Milliomos egy televíziós kvízjáték, műveltségi vetélkedő, amelyben rendkívül magas díjakat nyerhet a játékos, ha jól felel az egymást követő (Magyarországon 15) feleletválasztós kérdésekre.",
    "Való életben szerzett pontjaidat tudod a táblázatba berögzíteni és a játék típusától függően kiszámolja a két játékos pontjait.",
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
  if(counter > games.indexImg.length -1) {
    counter = 0;
  }
  change(projectIndex, projectTitle, projectDescription, projectLink, counter);
});

gameMinus.addEventListener("click", function() {
  counter --;
  if(counter < 0) {
    counter = games.indexImg.length - 1;
  }
  change(projectIndex, projectTitle, projectDescription, projectLink, counter);
});