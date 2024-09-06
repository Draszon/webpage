"use strict";

const gameChanger = {
  projectIndex: document.getElementById("project-index"),
  projectTitle: document.getElementById("project-title"),
  projectDescription: document.getElementById("project-description"),
  projectLink: document.querySelector(".project-link"),

  gameMinus: document.getElementById("game-minus"),
  gamePlus: document.getElementById("game-plus"),

  games: [],
  counter: 0,

  change(counters) {
    this.projectIndex.src = this.games[counters].img;
    this.projectTitle.innerText = this.games[counters].name;
    this.projectDescription.innerText = this.games[counters].description;
    this.projectLink.href = this.games[counters].link;
  },

  updateCounter(increment) {
    this.counter += increment;
    if (this.counter > this.games.length -1) {
      this.counter = 0;
    } else if (this.counter < 0) {
      this.counter = this.games.length -1
    }
  },

  async init() {
    try {
      const response = await fetch("/assets/JS/games.json");
      this.games = await response.json();

      this.change(this.counter);

      this.gamePlus.addEventListener("click", () => {
        this.updateCounter(1);
        this.change(this.counter);
      });

      this.gameMinus.addEventListener("click", () => {
        this.updateCounter(-1);
        this.change(this.counter);
      });
    } catch (error) {
      console.log("Hiba: ", error);
    }
  }
};

gameChanger.init();