"use strict";

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

const moonBtn = document.getElementById('moon-btn');
const sunBtn = document.getElementById('sun-btn');

const body = document.getElementById('hero');
const navWrapper = document.getElementById('nav-wrapper');
const pcInfo = document.getElementsByClassName('pcinfo');
const logo = document.getElementById('logo');

const mobileNav = document.getElementById('navi');

//change to light mode
sunBtn.addEventListener('click', function() {
  sunBtn.style.visibility = 'hidden';
  moonBtn.style.visibility = 'visible';
  moonBtn.style.transition = '.4s';

  body.style.backgroundColor = 'hsl(0, 0%, 93%)';
  body.style.color = 'hsl(230, 21%, 11%)';
  body.style.transition = '.4s';

  navWrapper.style.backgroundColor = 'hsla(0, 0%, 93%, 0.7)';
  navWrapper.style.transition = '.2s';

  mobileNav.style.backgroundColor = 'hsla(0, 0%, 93%, 0.7)'
  mobileNav.style.transition = '.2s'

  logo.src = "/assets/images/DRASZON-logo-light.png";

  (function() {
    for (let i = 0; i < pcInfo.length; i++) {
      pcInfo[i].style.backgroundColor = 'hsla(0, 0%, 85%, 1)';
    }
  })();
  pcInfo.style.transition = '.4s'
});

//change to dark mode
moonBtn.addEventListener('click', function() {
  moonBtn.style.visibility = 'hidden';
  sunBtn.style.visibility = 'visible';
  sunBtn.style.transition = '.4s';

  body.style.backgroundColor = 'hsl(230, 21%, 11%)';
  body.style.color = 'hsl(0, 0%, 85%)';
  body.style.transition = '.4s';

  navWrapper.style.backgroundColor = 'hsla(230, 21%, 11%, 0.7)';
  navWrapper.style.transition = '.2s';

  mobileNav.style.backgroundColor = 'hsla(230, 21%, 11%, 0.7)'
  mobileNav.style.transition = '.2s'

  logo.src = "/assets/images/DRASZON-logo.png";

  (function() {
    for (let i = 0; i < pcInfo.length; i++) {
      pcInfo[i].style.backgroundColor = 'hsla(0, 0%, 100%, 0.1)';
    }
  })();
  pcInfo.style.transition = '.4s'
});

//mobile nav menu open function
const open = () => {
  navi.style.width = '15.625rem';
  navBtn.style.visibility = 'hidden';
  closeBtn.style.visibility = 'visible';
};

//mobile nav menu close function
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

//Q&A section my age calculator
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
    console.log('Hiba a születési év kiszámításában!');
  }
};

age.textContent = ageCounter(year, month, day);
footerYear.textContent = year;