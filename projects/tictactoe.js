const playerA = 'X';
const playerB = 'O';

let first = document.getElementById('span1').innerText;
let second = document.getElementById('span2').innerText;
let third = document.getElementById('span3').innerText;
let fourth = document.getElementById('span4').innerText;
let fifth = document.getElementById('span5').innerText;
let sixth = document.getElementById('span6').innerText;
let seventh = document.getElementById('span7').innerText;
let eighth = document.getElementById('span8').innerText;
let ninth = document.getElementById('span9').innerText;

let playerX = 0;
let playerY = 0;
// ellenőrzi hogy valamelyik lehetséges megoldás teljesült-e

const check = ((first, second, third, fourth, fifth, sixth, seventh, eighth, ninth) => {
    if (this.first === 'X' && this.second === 'X' && this.third === 'X' || fourth === 'X' && fifth === 'X' && sixth === 'X' || seventh === 'X' && eighth === 'X' && ninth === 'X' || first === 'X' && fifth === 'X' && ninth === 'X' || third === 'X' && fifth === 'X' && seventh === 'X' || first === 'X' && fourth === 'X' && seventh === 'X' || second === 'X' && fifth === 'X' && eighth === 'X' || third === 'X' && sixth === 'X' && ninth === 'X') {
        alert('Gratulálok: X játékos nyert!');
        playerX++;
        document.getElementById('playerX').innerHTML = playerX;
        boardClear();
    } else if (first === 'O' && second === 'O' && third === 'O' || fourth === 'O' && fifth === 'O' && sixth === 'O' || seventh === 'O' && eighth === 'O' && ninth === 'O' || first === 'O' && fifth === 'O' && ninth === 'O' || third === 'O' && fifth === 'O' && seventh === 'O' || first === 'O' && fourth === 'O' && seventh === 'O' || second === 'O' && fifth === 'O' && eighth === 'O' || third === 'O' && sixth === 'O' && ninth === 'O') {
        alert('Gratulálok: Y játékos nyert!');
        playerY++;
        document.getElementById('playerY').innerHTML = playerY;
        boardClear();
    } else {
        console.log('Még senki sem nyert!');
    }
});


const boardClear = (() => {
    document.getElementById('span1').innerHTML = '';
    document.getElementById('span2').innerHTML = '';
    document.getElementById('span3').innerHTML = '';
    document.getElementById('span4').innerHTML = '';
    document.getElementById('span5').innerHTML = '';
    document.getElementById('span6').innerHTML = '';
    document.getElementById('span7').innerHTML = '';
    document.getElementById('span8').innerHTML = '';
    document.getElementById('span9').innerHTML = '';
    [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth] = ['', '', '', '', '', '', '', '', ''];
});

document.getElementById('new-game').addEventListener('click', () => {
    boardClear();
});

let jatekosB = false;
// játékos kattintására megnézi van e valami a mezőben, ha nincs
// akkor beírja a játékos karakterét (mindegyik mezőnél)
document.getElementById('cell-1').addEventListener('click', () => {
    if (first == '' && jatekosB == false) {
        first = playerA;
        document.getElementById('span1').innerHTML = first;
        jatekosB = true;
    } else if (first == '' && jatekosB == true) {
        first = playerB;
        document.getElementById('span1').innerHTML = first;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-2').addEventListener('click', () => {
    if (second == '' && jatekosB == false) {
        second = playerA;
        document.getElementById('span2').innerHTML = second;
        jatekosB = true;
    } else if (second == '' && jatekosB == true) {
        second = playerB;
        document.getElementById('span2').innerHTML = second;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-3').addEventListener('click', () => {
    if (third == '' && jatekosB == false) {
        third = playerA;
        document.getElementById('span3').innerHTML = third;
        jatekosB = true;
    } else if (third == '' && jatekosB == true) {
        third = playerB;
        document.getElementById('span3').innerHTML = third;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-4').addEventListener('click', () => {
    if (fourth == '' && jatekosB == false) {
        fourth = playerA;
        document.getElementById('span4').innerHTML = fourth;
        jatekosB = true;
    } else if (fourth == '' && jatekosB == true) {
        fourth = playerB;
        document.getElementById('span4').innerHTML = fourth;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-5').addEventListener('click', () => {
    if (fifth == '' && jatekosB == false) {
        fifth = playerA;
        document.getElementById('span5').innerHTML = fifth;
        jatekosB = true;
    } else if (fifth == '' && jatekosB == true) {
        fifth = playerB;
        document.getElementById('span5').innerHTML = fifth;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-6').addEventListener('click', () => {
    if (sixth == '' && jatekosB == false) {
        sixth = playerA;
        document.getElementById('span6').innerHTML = sixth;
        jatekosB = true;
    } else if (sixth == '' && jatekosB == true) {
        sixth = playerB;
        document.getElementById('span6').innerHTML = sixth;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-7').addEventListener('click', () => {
    if (seventh == '' && jatekosB == false) {
        seventh = playerA;
        document.getElementById('span7').innerHTML = seventh;
        jatekosB = true;
    } else if (seventh == '' && jatekosB == true) {
        seventh = playerB;
        document.getElementById('span7').innerHTML = seventh;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-8').addEventListener('click', () => {
    if (eighth == '' && jatekosB == false) {
        eighth = playerA;
        document.getElementById('span8').innerHTML = eighth;
        jatekosB = true;
    } else if (eighth == '' && jatekosB == true) {
        eighth = playerB;
        document.getElementById('span8').innerHTML = eighth;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});

document.getElementById('cell-9').addEventListener('click', () => {
    if (ninth == '' && jatekosB == false) {
        ninth = playerA;
        document.getElementById('span9').innerHTML = ninth;
        jatekosB = true;
    } else if (ninth == '' && jatekosB == true) {
        ninth = playerB;
        document.getElementById('span9').innerHTML = ninth;
        jatekosB = false;
    } else {
        alert('Válassz másik mezőt!');
    }
    check(first, second, third, fourth, fifth, sixth, seventh, eighth, ninth);
});