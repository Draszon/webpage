const questionField = document.querySelector('#question');

const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');

const firstPrice = document.getElementById('first');
const secondPrice = document.getElementById('second');
const thirdPrice = document.getElementById('third');
const fourthPrice = document.getElementById('fourth');
const fifthPrice = document.getElementById('fifth');
const sixthPrice = document.getElementById('sixth');
const seventhPrice = document.getElementById('seventh');
const eighthPrice = document.getElementById('eighth');

const halfBtn = document.getElementById('help-half');
const phoneBtn = document.getElementById('help-phone');
const audienceBtn = document.getElementById('help-audience');

const audienceProgressBar = document.getElementById("audience-wrapper");

const audienceA = document.getElementById("valueA");
const audienceB = document.getElementById("valueB");
const audienceC = document.getElementById("valueC");
const audienceD = document.getElementById("valueD");

let money = 1;

const questions = {
    "question0": {
        "question": "Ki szokott harangozni, ha szegény az eklézsia a közmondás szerint?",
        "A": "A: maga a pap",
        "B": "B: a templom egere",
        "C": "C: a papné",
        "D": "D: a szél",
        "answer": "A",
        "ready": "true"

    },
    "question1": {
        "question": "Mi lehet fekete, kanadai, gyalog, fürtös?",
        "A": "A: darázs",
        "B": "B: bodza",
        "C": "C: vitorla",
        "D": "D: kakukk",
        "answer": "B",
        "ready": "true"
    },
    "question2": {
        "question": "Kiknek nem akart Ady a hegedőse lenni az Új vízeken című verse szerint?",
        "A": "A: az uraknak",
        "B": "B: a pénznek",
        "C": "C: a forradalomnak",
        "D": "D: a szürkéknek",
        "answer": "D",
        "ready": "true"
    },
    "question3": {
        "question": "Melyik folyó felett ível át a híres firenzei Ponte Vecchio híd?",
        "A": "A: Adige",
        "B": "B: Tevere",
        "C": "C: Pó",
        "D": "D: Arno",
        "answer": "D",
        "ready": "true"
    },
    "question4": {
        "question": "Mi a címe Rossini zeneművének, amit nyávogva kell elénekelni?",
        "A": "A: Macskaduett",
        "B": "B: Szerenád",
        "C": "C: Macskazene",
        "D": "D: Egér-szonáta",
        "answer": "A",
        "ready": "true"
    },
    "question5": {
        "question": "Melyik az a fa, melynek levelei élükkel fordulnak a nap felé?",
        "A": "A: majomkenyérfa",
        "B": "B: kaucsukfa",
        "C": "C: eukaliptuszfa",
        "D": "D: tiszafa",
        "answer": "C",
        "ready": "true"
    },
    "question6": {
        "question": "Az alábbiak közül melyik Arany János Toldi triológiájának egyik költeménye?",
        "A": "A: Toldi és Poldi kalandjai",
        "B": "B: Toldi és az azkabani fogoly",
        "C": "C: Toldi estéje",
        "D": "D: Toldi két apródja",
        "answer": "C",
        "ready": "true"
    },
    "question7": {
        "question": "A hagyomány szerint hova indultak, akik háztűznézőbe mentek?",
        "A": "A: disznót vágni",
        "B": "B: vőlegényt látogatni",
        "C": "C: locsolkodni",
        "D": "D: Részvétet nyílvánítani",
        "answer": "B",
        "ready": "true"
    },
    "question8": {
        "question": "A következő hegységek közül melyik nem Eurázsiában található?",
        "A": "A: Andok",
        "B": "B: Ural",
        "C": "C: Kaukázus",
        "D": "D: Alpok",
        "answer": "A",
        "ready": "true"
    },
    "question9": {
        "question": "A felsorolt tudományágak közül melyik foglalkozik lepkékkel?",
        "A": "A: balneológia",
        "B": "B: ornitológia",
        "C": "C: lepidopőterológia",
        "D": "D: turkológia",
        "answer": "A",
        "ready": "true"
    },
    "question10": {
        "question": "Az alábbi anyagok közül melyik nem a besamelmártás alapanyaga?",
        "A": "A: list",
        "B": "B: tojás",
        "C": "C: vaj",
        "D": "D: tej",
        "answer": "B",
        "ready": "true"
    },
    "question11": {
        "question": "Hogy nevezik az önző, fösvény személyt?",
        "A": "A: szűkkeblű",
        "B": "B: bővérű",
        "C": "C: önfejű",
        "D": "D: nagymellényű",
        "answer": "A",
        "ready": "true"
    },
    "question12": {
        "question": "Milyen, mára elavult jelentése volt évszázadokkal ezelőtt a marha szónak?",
        "A": "A: vagyon",
        "B": "B: ügyetlen lovas",
        "C": "C: család",
        "D": "D: alattvaló",
        "answer": "A",
        "ready": "true"
    },
    "question13": {
        "question": "Milyen pitypangnak hívják a gyermekláncfüvet?",
        "A": "A: pongyola",
        "B": "B: pipogya",
        "C": "C: patyolat",
        "D": "D: papucs",
        "answer": "A",
        "ready": "true"
    },
    "question14": {
        "question": "Mi az élet megrontója Vörösmarty verse szerint?",
        "A": "A: háború",
        "B": "B: ábrándozás",
        "C": "C: fogyókúra",
        "D": "D: pénz",
        "answer": "B",
        "ready": "true"
    },
    "question15": {
        "question": "Kik alapították Karthágó városát?",
        "A": "A: egyiptomiak",
        "B": "B: főníciaiak",
        "C": "C: vikingek",
        "D": "D: sumérok",
        "answer": "B",
        "ready": "true"
    },
    "question16": {
        "question": "Melyik regény első szavai voltak ezek: Május 3., Szász-Besztercén - Május 1-én este 8.35-kor indultam el Münchenből.?",
        "A": "A: Suszter, szabó, baka, kém",
        "B": "B: Drakula",
        "C": "C: A sötétség mélyén",
        "D": "D: Frankenstein",
        "answer": "B",
        "ready": "true"
    },
    "question17": {
        "question": "Melyik alapanyag nem kell a görög salátához?",
        "A": "A: fetasajt",
        "B": "B: paradicsom",
        "C": "C: sárgarépa",
        "D": "D: uborka",
        "answer": "C",
        "ready": "true"
    },
    "question18": {
        "question": "1718-ban melyik volt az a kalóz, aki csatában vesztette életét a mostani Észak-Karolina partjainál?",
        "A": "A: Calico Jack",
        "B": "B: Blackbeard vagyis Feketeszakáll",
        "C": "C: Bartholomew Roberts",
        "D": "D: Captain Kid eredeti nevén William Kid kapitány",
        "answer": "C",
        "ready": "true"
    },
    "question19": {
        "question": "1718-ban melyik volt az a kalóz, aki csatában vesztette életét a mostani Észak-Karolina partjainál?",
        "A": "A: Calico Jack",
        "B": "B: Captain Kid eredeti nevén William Kid kapitány",
        "C": "C: Bartholomew Roberts",
        "D": "D: Blackbeard vagyis Feketeszakáll",
        "answer": "D",
        "ready": "true"
    },
    "question20": {
        "question": "Mikor lett a magyar országgyűlés intézményes székhelye Pozsony?",
        "A": "A: a mohácsi vész évében",
        "B": "B: az 1844-es nyelvtörvény után",
        "C": "C: Márai Terézia megkoronázásakor",
        "D": "D: a tatárjárást követő évben",
        "answer": "A",
        "ready": "true"
    },
    "question21": {
        "question": "Mikor lett a magyar országgyűlés intézményes székhelye Pozsony?",
        "A": "A: a mohácsi vész évében",
        "B": "B: az 1844-es nyelvtörvény után",
        "C": "C: Márai Terézia megkoronázásakor",
        "D": "D: a tatárjárást követő évben",
        "answer": "A",
        "ready": "true"
    }
};

let rnd = Math.floor(Math.random() * 22);


let randomGenerator = () => {
    rnd = Math.floor(Math.random() * 22);
    while(questions['question' + rnd]['ready'] != 'true') {
        rnd = Math.floor(Math.random() * 22);
        console.log("új kérdés");
    }
    questions['question' + rnd]['ready'] = "false";
    return rnd;
};

/*function randomGenerator() {
    rnd = Math.floor(Math.random() * 10);
}*/

function newQuestion() {
    questionField.innerHTML = questions['question' + rnd]['question'];
    answerA.innerHTML = questions['question' + rnd]['A'];
    answerB.innerHTML = questions['question' + rnd]['B'];
    answerC.innerHTML = questions['question' + rnd]['C'];
    answerD.innerHTML = questions['question' + rnd]['D'];
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "white";
    answerA.style.background = "";
    answerB.style.background = "";
    answerC.style.background = "";
    answerD.style.background = "";
}

newQuestion();

function moneyCounter(moneyC) {
    switch (moneyC) {
        case 1:
            firstPrice.style.backgroundColor = "orange";
            firstPrice.style.color = "black";
            firstPrice.style.borderRadius = '10px';
            firstPrice.style.transition = '.2s';
            break;
        case 2:
            secondPrice.style.backgroundColor = "orange";
            secondPrice.style.color = "black";
            secondPrice.style.borderRadius = '10px';
            secondPrice.style.transition = '.2s';
            break;
        case 3:
            thirdPrice.style.backgroundColor = "orange";
            thirdPrice.style.color = "black";
            thirdPrice.style.borderRadius = '10px';
            thirdPrice.style.transition = '.2s';
            break;
        case 4:
            fourthPrice.style.backgroundColor = "orange";
            fourthPrice.style.color = "black";
            fourthPrice.style.borderRadius = '10px';
            fourthPrice.style.transition = '.2s';
            break;
        case 5:
            fifthPrice.style.backgroundColor = "orange";
            fifthPrice.style.color = "black";
            fifthPrice.style.borderRadius = '10px';
            fifthPrice.style.transition = '.2s';
            break;
        case 6:
            sixthPrice.style.backgroundColor = "orange";
            sixthPrice.style.color = "black";
            sixthPrice.style.borderRadius = '10px';
            sixthPrice.style.transition = '.2s';
            break;
        case 7:
            seventhPrice.style.backgroundColor = "orange";
            seventhPrice.style.color = "black";
            seventhPrice.style.borderRadius = '10px';
            seventhPrice.style.transition = '.2s';
            break;
        case 8:
            eighthPrice.style.backgroundColor = "orange";
            eighthPrice.style.color = "black";
            eighthPrice.style.borderRadius = '10px';
            eighthPrice.style.transition = '.2s';
            alert("Gratulálok, megnyerted a főnyereményt!");
            location.reload();
            break;
    }
}

moneyCounter(money);

answerA.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "A") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

answerB.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "B") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

answerC.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "C") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

answerD.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "D") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

halfBtn.addEventListener("click", halfAnswer);
function halfAnswer() {
    let counter = 0;
    let rndLetter1
    let rndLetter2;
    let randomLetter;
    while (counter != 2) {
        rndLetter1 = Math.floor(Math.random() * 4);

        switch (rndLetter1) {
            case 0:
                randomLetter = "A";
                break;
            case 1:
                randomLetter = "B";
                break;
            case 2:
                randomLetter = "C";
                break;
            case 3:
                randomLetter = "D";
                break;
        }
        while (rndLetter1 === rndLetter2 || randomLetter === questions['question' + rnd]['answer']) {
            rndLetter1 = Math.floor(Math.random() * 4);
            switch (rndLetter1) {
                case 0:
                    randomLetter = "A";
                    break;
                case 1:
                    randomLetter = "B";
                    break;
                case 2:
                    randomLetter = "C";
                    break;
                case 3:
                    randomLetter = "D";
                    break;
            }
        }
        rndLetter2 = rndLetter1;
        counter++;

        document.getElementById(randomLetter).style.color = "red";
        halfBtn.style.color = "red";
        halfBtn.style.borderColor = "red";
        halfBtn.removeEventListener("click", halfAnswer);
    }
}

phoneBtn.addEventListener("click", phoneButton);
function phoneButton() {
    const randomAnswer = Math.floor(Math.random() * 4);
    switch (randomAnswer) {
        case 0:
            answerA.style.background = "green";
            break;
        case 1:
            answerB.style.background = "green";
            break;
        case 2:
            answerC.style.background = "green";
            break;
        case 3:
            answerD.style.background = "green";
            break;
    }
    phoneBtn.style.borderColor = "red";
    phoneBtn.style.color = "red";
    phoneBtn.removeEventListener("click", phoneButton);
}

audienceBtn.addEventListener("click", audienceButton);
function audienceButton() {
    const correctAnswer = questions['question' + rnd]['answer'];
    const correctRandom = Math.floor(Math.random() * (70 - 40) + 40);
    let presentvalue = 100;

    audienceProgressBar.style.display = "block";
    setTimeout( () => {
        document.getElementById("value" + correctAnswer).value = correctRandom;
        if (audienceA.value == "") {
            presentvalue = presentvalue - correctRandom;
            audienceA.value = Math.floor(Math.random() * (presentvalue - 0) + 0);
        }
        if (audienceB.value == "") {
            presentvalue = presentvalue - audienceA.value;
            audienceB.value = Math.floor(Math.random() * (presentvalue - 0) + 0);
        }
        if (audienceC.value == "") {
            presentvalue = presentvalue - audienceB.value;
            audienceC.value = Math.floor(Math.random() * (presentvalue - 0) + 0);
            if (audienceD.value != "") {
                audienceC.value += presentvalue;
            }
        }
        if (audienceD.value == "") {
            presentvalue = presentvalue - audienceC.value;
            audienceD.value = presentvalue;
        }
    }, 2000);
    
    audienceBtn.style.borderColor = "red";
    audienceBtn.style.color = "red";
    audienceBtn.removeEventListener("click", audienceButton);
}