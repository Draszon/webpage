"use strict";

const projectIndex = document.getElementById("project-index");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectLink = document.querySelector(".project-link");

const gameMinus = document.getElementById("game-minus");
const gamePlus = document.getElementById("game-plus");

const games = [
  {
    img: "/assets/images/jsProjectIndex/tic-tac-toe-game.svg",
    name: "Tic-Tac-Toe",
    description: "A két játékos hagyományosan X és O alakú jelekkel (bábukkal) játszik. A 3×3 mezőből álló táblára felváltva teszik le a jeleiket, bármelyik még szabad mezőre. Az nyer, akinek sikerül egy vonalban 3 jelet elhelyeznie, vízszintes, függőleges vagy átlós irányban.",
    link: "/projects/tictactoe.html"
  },
  {
    img: "/assets/images/jsProjectIndex/rock-paper-scissors.png",
    name: "Kő Papír Olló",
    description: "A játékosok hangosan háromig számolnak vagy a játék nevét, a kő – papír – olló-t mondják, minden számolásnál meglendítve a felemelt és ökölbe szorított kezüket. A harmadik számolás közben vagy az utána következő ütemben a játékosok kezükkel felveszik a három alakzat egyikét és megmutatják az ellenfelüknek.",
    link: "/projects/rockpaperscissor.html"
  },
  {
    img: "/assets/images/jsProjectIndex/hangman.svg",
    name: "Akasztófa",
    description: "A találgató játékos javasol egy betűt, mely ha szerepel a kitalálandó szóban, a betű helyének megfelelő vonalakra ráírásra kerül. Amennyiben a betű nem szerepel a kitalálandó szóban, úgy egy stilizált akasztófa egy része kerül lerajzolásra.",
    link: "/projects/hangman.html"
  },
  {
    img: "/assets/images/jsProjectIndex/black-jack.svg",
    name: "Black jack",
    description: "A Blackjack egy klasszikus kártyajáték, ahol a célod, hogy kártyáid összértéke minél közelebb legyen a 21-hez, anélkül, hogy túllépnéd. A játékban a játékos és az osztó versenyeznek egymással.",
    link: "/projects/blackjack.html"
  },
  {
    img: "/assets/images/jsProjectIndex/legyen ön is milliomos.png",
    name: "Legyen Ön is Milliomos",
    description: "A Legyen Ön is Milliomos egy televíziós kvízjáték, műveltségi vetélkedő, amelyben rendkívül magas díjakat nyerhet a játékos, ha jól felel az egymást követő (Magyarországon 15) feleletválasztós kérdésekre.",
    link: "/projects/millionaire.html"
  },
  {
    img: "/assets/images/jsProjectIndex/dart-board.svg",
    name: "Darts",
    description: "Való életben szerzett pontjaidat tudod a táblázatba berögzíteni és a játék típusától függően kiszámolja a két játékos pontjait.",
    link: "/projects/darts.html"
  }
];

let counter = 0;

function change(counter) {
  projectIndex.src = games[counter].img;
  projectTitle.innerText = games[counter].name;
  projectDescription.innerText = games[counter].description;
  projectLink.href = games[counter].link;
}

function updateCounter(increment) {
  counter += increment;
  if (counter > games.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = games.length - 1;
  } else {
    console.log("Hiba történt a játékválasztóban!");
  }
}

change(counter);

gamePlus.addEventListener("click", function() {
  updateCounter(1);
  change(counter);
});

gameMinus.addEventListener("click", function() {
  updateCounter(-1);
  change(counter);
});