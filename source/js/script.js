var openNav = document.querySelector(".main-nav__toggle");
var navWrapper = document.querySelector(".main-nav__wrap");
var headerPart = document.querySelector(".page-header__top-part");

openNav.onclick = function () {
  openNav.classList.toggle("main-nav__toggle--closed");
  openNav.classList.toggle("main-nav__toggle--opened");
  navWrapper.classList.toggle("main-nav__wrap--closed");
  navWrapper.classList.toggle("main-nav__wrap--opened");
  headerPart.classList.toggle("page-header__top-part--opened");
};
