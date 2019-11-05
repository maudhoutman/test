//Hulp gehad van Rowin Ruizendaal uit mijn klas

var burger = document.querySelector('.burger');
var nav = document.getElementsByClassName('nav-links')[0];

function slide() {
    nav.classList.toggle ('nav-active');
}

burger.addEventListener('click', slide);