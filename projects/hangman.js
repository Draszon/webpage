const abcField = document.querySelector('.abc');
const categoryField = document.getElementById('category-span');
const letterField = document.querySelector('.letters');
const newGameBtn = document.getElementById('new-game-btn');
const hangmanImg = document.getElementById('hangman-img');

let imgCounter = 1;

const abc = [
    "A", "Á", "B", "C", "D", "E", "É", "F", "G",
    "H", "I", "Í", "J", "K", "L", "M", "N", "O",
    "Ó", "Ö", "Ő", "P", "Q", "R", "S", "T", "U", "Ú",
    "Ü", "Ű", "V", "W", "X", "Y", "Z"
];

const category = [
    "gyümölcs", "bútor", "autó"
];

const fruit = [
    "alma", "banán", "narancs", "körte", "szilva", "szőlő", "körte", "eper",
    "gránátalma", "meggy", "málna", "őszibarack", "birsalma", "áfonya", "szeder",
    "dinnye", "kiwi", "barack", "mandarin"
];

const furniture = [
    "kanapé", "fotel", "szék", "szekrény", "asztal", "ágy", "forgószék", "függőágy",
    "íróasztal", "polc", "könyvespolc", "gardrób"
];

const car = [
    "audi", "bmw", "ford", "toyota", "wolvo", "lada", "volkswagen", "skoda", "trabant",
    "tesla", "jeep", "ford", "honda", "mazda", "nissan", "mitsubishi", "subaru", "opel",
    "porsche", "fiat", "ferrari", "bentley", "jaguar", "lotus", "koenigsegg", "uaz"
];

function randomGenerator(rnd) {
    let randomNumber = Math.floor(Math.random() * rnd);
    return randomNumber;
}

function letters() {
    for (let i = 0; i <= abc.length - 1; i++) {
        const abcSpan = document.createElement('span');
        abcSpan.id = abc[i];
        abcSpan.classList.add('.letters-class');
        abcSpan.textContent = abc[i];
        abcField.appendChild(abcSpan);
    }
}

// a tömb hossza alapján sorsol egy random kategóriát és a hozzá
// tartozó random szót a kategóriából
function categoryAndWordSelect() {
    let categoryRnd =  randomGenerator(category.length);
    const categorySpan = document.createElement('span');
    categorySpan.textContent = category[categoryRnd];
    categoryField.appendChild(categorySpan);

    switch (categoryRnd) {
        case 0:
            let fruitRnd = randomGenerator(fruit.length - 1);
            selectedWord = fruit[fruitRnd];
            break;
        case 1:
            let furnitureRnd = randomGenerator(furniture.length - 1);
            selectedWord = furniture[furnitureRnd];
            break;
        case 2:
            let carRnd = randomGenerator(car.length - 1);
            selectedWord = car[carRnd];
            break;
    }
}

function questField() {
    for (let i = 0; i < selectedWord.length; i++) {
        const questsField = document.createElement('span');
        questsField.textContent = '_';
        questsField.id = i;
        letterField.appendChild(questsField);
    }
}

// a megadott string karaktereiből listát csinál
function chars(string) {
    return Array.from(String(string));
}

// for ciklussal mindegyik betűre az abc lista alapján tesz egy eseményfigyelőt
// a kattintott mező eltárolja a clickedBtn változóba, megnézi hogy az adott betű
// szerepel-e a szóban, az id-t kitörli és a tartalmát X-re változtatja
// majd ellenőrzi, hogy minden betű megvan-e, ha igen akkor gratulál, ha nem akkor megy tovább
function letterCheck() {
    let lettersField = '';
    let counter = 0;
    for (let i = 0; i < abc.length; i++) {
        lettersField = document.getElementById(abc[i]);
        lettersField.addEventListener('click', (e) => {
            let clickedBtn = e.target;
            let loverCase = clickedBtn.textContent.toLowerCase();
            let szerepelE = selectedWord.includes(loverCase);
            if (szerepelE === true) {
                for (let y = 0; y <= characterList.length - 1; y++) {
                    if (loverCase === characterList[y]) {
                        document.getElementById(y).textContent = loverCase;
                        counter++;
                        if (counter === characterList.length) {
                            alert('Gratulálok, kitaláltad!');
                            location.reload();
                        }
                    }     
                }
            } else {
                hangmanImg.src = 'assets/hangman/' + imgCounter + '.png';
                imgCounter++;
                if (imgCounter === 9) {
                    alert('Ez most nem sikerült, a kitalálandó szó ' + selectedWord + ' volt.');
                    location.reload();
                }
            }
            clickedBtn.id = '';
            clickedBtn.textContent = 'X';
            clickedBtn.style.backgroundColor = 'hsl(163, 80%, 60%)';
        });
    }
}

newGameBtn.addEventListener('click', () => {
    location.reload();
});

letters();
categoryAndWordSelect();
questField();
let characterList = chars(selectedWord);
letterCheck();
console.log(selectedWord);