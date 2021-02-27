const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('change');
    navUL.classList.toggle('show');
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