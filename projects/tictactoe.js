"use strict";

const TicTacToe = {
	fields: document.querySelectorAll(".field"),
	errorField: document.getElementById("error-field"),
	pX: document.getElementById("xp"),
	pO: document.getElementById("op"),

	table: Array(9).fill(null),

	playerX: 0,
	playerO: 0,

	currentPlayer: "X",

	wins: [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	],

	tableReset() {
		this.table = Array(9).fill(null);
		this.fields.forEach(field => {
			field.textContent = "";
		});
		this.currentPlayer = "X";
	},

	winCheck() {
		for (let i = 0; i < this.wins.length; i++) {
			let checkList = [];
			for (let j = 0; j < this.wins[i].length; j++) {
				checkList.push(this.table[this.wins[i][j]]);
			}
			if (checkList[0] === "X" && checkList[1] === "X" && checkList[2] === "X") {
				console.log("X nyert");
				this.playerX++;
				this.pX.textContent = this.playerX;
				this.tableReset();
			} else if (checkList[0] === "O" && checkList[1] === "O" && checkList[2] === "O") {
				console.log("O nyert");
				this.playerO++;
				this.pO.textContent = this.playerO;
				this.tableReset();
			}
		}
	},

	switchPlayer() {
		if (this.currentPlayer === "X") {
			this.currentPlayer = "O";
		} else {
			this.currentPlayer = "X";
		}
	},

	init() {
		this.fields.forEach(field => {
			field.addEventListener("click", () => {
				//if (this.currentPlayer === null) return; // További kattintások letiltása ha a játék véget ért

				let index = parseInt(field.dataset.index, 10);

				if (index >= 0 && index < this.table.length) {
					if (field.textContent == "") {
						field.textContent = this.currentPlayer;
						this.table[index] = this.currentPlayer;
						this.switchPlayer();
						this.winCheck();
					} else {
						this.errorField.innerHTML = "Válassz másik mezőt!";
						setTimeout(() => {
							if (this.errorField) {
								this.errorField.innerHTML = "";
							}
						}, 2000);
					}
				} else {
					console.error("Helytelen index: ", index);
				}
				
			});
		});
	}
};

TicTacToe.init();