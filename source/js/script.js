var openNav = document.querySelector(".main-nav__toggle");
var navWrapper = document.querySelector(".main-nav__wrap");
var headerPart = document.querySelector(".page-header__top-part");
var send = document.querySelector(".submit__input");
var name = document.querySelector("[name=user-name]");
var surname = document.querySelector("[name=user-surname]");
var patronymic = document.querySelector("[name=user-patronymic]");
var phone = document.querySelector("[name=phone]");
var mail = document.querySelector("[name=mail]");
var success = document.querySelector(".popup--success");
var fail = document.querySelector(".popup--fail");
var close = document.querySelector(".modal-content__btn");

openNav.onclick = function () {
  openNav.classList.toggle("main-nav__toggle--closed");
  openNav.classList.toggle("main-nav__toggle--opened");
  navWrapper.classList.toggle("main-nav__wrap--closed");
  navWrapper.classList.toggle("main-nav__wrap--opened");
  headerPart.classList.toggle("page-header__top-part--opened");
};
