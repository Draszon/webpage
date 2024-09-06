"use strict";

const mainPage = {
  navOpen: document.getElementById("mobile-nav-open"),
  navClose: document.getElementById("mobile-nav-close"),
  mobileNav: document.getElementById("mobileMenu"),
  yearFooter: document.getElementById("year"),
  date: new Date(),

  init() {
    if (this.navOpen && this.navClose && this.mobileNav) {
      this.yearFooter.innerHTML = this.date.getFullYear();

      this.navOpen.addEventListener("click", () => {
        this.mobileNav.style.height = "200px";
        this.navOpen.display = "none";
        this.navClose.style.display = "block";
      });
      
      this.navClose.addEventListener("click", () => {
        this.mobileNav.style.height = "0";
        this.navOpen.style.display = "block";
        this.navClose.style.display = "none";
      });
    } else {
      console.log("Nem lehet betölteni a menüket!");
    }

  }
}

document.addEventListener("DOMContentLoaded", () => {
  mainPage.init();
});