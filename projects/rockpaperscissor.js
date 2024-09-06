"use strict";

const game = {
    data: {
        playerScoreDisplay: document.getElementById("player-score"),
        pcScoreDisplay: document.getElementById("pc-score"),
        result: document.getElementById("result"),
        playerFields: document.querySelectorAll(".player-icons"),
        pcSore: 0,
        playerScore: 0
    },

    random() {
        return Math.floor(Math.random() *3);
    },

    winLooseCheck(fieldIndex) {
        
    },

    init() {
        this.data.playerFields.forEach(field =>  {
            field.addEventListener("click", () => {
                this.data.pcSore = this.random();
                let fieldIndex = parseInt(field.dataset.index, 10);
                this.winLooseCheck(fieldIndex);
            });
        });
    }
};

game.init();