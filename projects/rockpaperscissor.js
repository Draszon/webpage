"use strict";

const game = {
    data: {
        playerScoreDisplay: document.getElementById("player-score"),
        pcScoreDisplay: document.getElementById("pc-score"),
        result: document.getElementById("result"),
        playerFields: document.querySelectorAll(".player-icons"),
        pcFields: document.querySelectorAll(".pc-icons"),
        pcSore: 0,
        playerScore: 0
    },

    random() {
        return Math.floor(Math.random() *3);
    },

    pcIconDisplay(pcscore) {
        this.data.pcFields.forEach(field => {
            let index = parseInt(field.dataset.index);
            if (index === pcscore) {
                field.style.color = "white";
            }
        });
    },

    boardClear() {
        setTimeout(() => {
            this.data.pcFields.forEach(field => {
                
            });
        }, 1000);
    },

    init() {
        this.data.playerFields.forEach(field =>  {
            field.addEventListener("click", () => {
                this.data.pcSore = this.random();

                this.pcIconDisplay(this.data.pcSore);
                this.boardClear();
                let fieldIndex = parseInt(field.dataset.index, 10);
            });
        });
    }
};

game.init();