let nav = document.querySelector('.main-nav');

let navButton = document.querySelector('.main-nav__toggle');
navButton.onclick = function() {

  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
};
