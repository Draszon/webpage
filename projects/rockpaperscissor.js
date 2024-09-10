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

    pcIconDisplay(pcindex) {
        this.data.pcFields.forEach(field => {
            let index = parseInt(field.dataset.index);
            if (index === pcindex) {
                field.style.color = "hsl(0, 0%, 100%)";
                field.disabled = true;
                setTimeout(() => {
                    field.style.color = "hsl(0, 0%, 60%)";
                    field.disabled = false;
                }, 500);
            }
        });
    },

    winLooseCheck(player, pc) {
        if ((player === 0 && pc === 0) || (player === 1 && pc === 1) || player === 2 && pc === 2) {
            return "Döntetlen!";
        } else if ((player === 0 && pc === 1) || (player === 1 && pc === 2) || (player === 2 && pc === 0)) {
            this.data.pcSore += 1;
            return "PC Nyert!";
        } else {
            this.data.playerScore += 1;
            return "Nyertél!";
        }
    },

    pointDisplay() {
        this.data.playerScoreDisplay.textContent = this.data.playerScore;
        this.data.pcScoreDisplay.textContent = this.data.pcSore;
    },
    
    init() {
        this.pointDisplay();
        this.data.playerFields.forEach(field =>  {
            field.addEventListener("click", () => {
                let pcCurrent = this.random();
                let playerCurrent = parseInt(field.dataset.index, 10);

                this.pcIconDisplay(pcCurrent);
                this.data.result.textContent = this.winLooseCheck(playerCurrent, pcCurrent);
                
                this.pointDisplay();
                setTimeout(() => {
                    this.data.result.textContent = "";
                }, 500);
            });
        });
    }
};

game.init();