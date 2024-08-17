"use strict";

const projectIndex = document.getElementById("project-index");
const projectTitle = document.getElementById("project-title");
const projectDescription = document.getElementById("project-description");
const projectLink = document.querySelector(".project-link");

const gameMinus = document.getElementById("game-minus");
const gamePlus = document.getElementById("game-plus");

async function loadGames() {
  try {
    const response = await fetch("/assets/JS/games.json");
    const games = await response.json();

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
  } catch (error) {
    console.log("Valami hibatörtént: ", error);
  }
}

loadGames();  