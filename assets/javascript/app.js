const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('nav-close-btn');
const heroBtn = document.getElementById('hero-btn');
const contactsBtn = document.getElementById('contacts-btn');
const equipmentsBtn = document.getElementById('equipments-btn');
const gyikBtn = document.getElementById('gyik-btn');
const downloadsBtn = document.getElementById('downloads-btn');
const programmingBtn = document.getElementById('programming-btn');

const navi = document.getElementById('navi');

const age = document.getElementById('age');
const footerYear = document.getElementById('footer-year');

const open = () => {
  navi.style.width = '15.625rem';
  navBtn.style.visibility = 'hidden';
  closeBtn.style.visibility = 'visible';
};

const close = () => {
  navi.style.width = '0rem';
  navBtn.style.visibility = 'visible';
  closeBtn.style.visibility = 'hidden';
};

navBtn.addEventListener('click', function() {
  open();
});

closeBtn.addEventListener('click', function() {
  close();
});

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const ageCounter = function(year, month, day) {
  const myAge = year - 1994;
  if (month < 6) {
    return myAge - 1;
  } else if (month === 6 && day < 3) {
    return myAge - 1;
  } else if (month === 6 && day >= 3) {
    return myAge;
  } else if (month > 6) {
    return myAge;
  } else {
    console.log('Hiba a születési év kiszámolásában!');
  }
};

age.textContent = ageCounter(year, month, day);
console.log('A pontos dátum: ' + year, month, day);
footerYear.textContent = year;