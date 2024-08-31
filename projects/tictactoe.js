"use strict";

const fields = document.querySelectorAll(".field");
const errorField = document.getElementById("error-field");
const pX = document.getElementById("xp");
const pO = document.getElementById("op");

let table = [];

let playerX = 0;
let playerO = 0;

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function tableReset() {
  table = Array(9).fill(null);
  fields.forEach(function(field) {
    field.textContent = "";
  });
  currentPlayer = "X";
}

function winCheck() {
  for (let i = 0; i < wins.length; i++) {
    let checkList = [];
    for (let j = 0; j < wins[i].length; j++) {
      checkList.push(table[wins[i][j]]);
    }
    if (checkList[0] === "X" && checkList[1] === "X" && checkList[2] === "X") {
      console.log("X nyert");
      playerX++;
      pX.textContent = playerX;
      tableReset();
    } else if (checkList[0] === "O" && checkList[1] === "O" && checkList[2] === "O") {
      console.log("O nyert");
      playerO++;
      pO.textContent = playerO;
      tableReset();
    }
  }
}

let currentPlayer = "X";

fields.forEach(function(field) {
  field.addEventListener("click", function() {
    let index = field.dataset.index;

    if (field.textContent == "") {
      field.textContent = currentPlayer;
      table[index] = currentPlayer;

      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      winCheck();
    } else {
      errorField.innerHTML = "Válassz másik mezőt!";
      setTimeout(function() {
        if (errorField) {
          errorField.innerHTML = "";
        }
      }, 2000);
    }
  });
});