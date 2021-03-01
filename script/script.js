const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#menu');
const page = document.querySelector('.content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('change');
    navUL.classList.toggle('show');
});

navUL.addEventListener('click', () => {
   navUL.classList.remove('show');
   hamburger.classList.remove('change');
});

page.addEventListener('click', () => {
    navUL.classList.remove('show');
    hamburger.classList.remove('change');
});

/* const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function fixedNav() {
    if(window.scrollY > navTop){
        nav.classList.add('squish');
    } else {
        nav.classList.remove('squish');
    }
}

window.addEventListener('scroll', fixedNav) */
