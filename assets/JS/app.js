"use strict";

const navOpen = document.getElementById("mobile-nav-open");
const navClose = document.getElementById("mobile-nav-close");
const mobileNav = document.getElementById("mobileMenu");

navOpen.addEventListener("click", function() {
  mobileNav.style.height = "200px";
  navOpen.style.display = "none";
  navClose.style.display = "block";
});

navClose.addEventListener("click", function() {
  mobileNav.style.height = "0";
  navOpen.style.display = "block";
  navClose.style.display = "none";
});