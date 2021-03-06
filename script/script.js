const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#menu');
const page = document.querySelector('.content');
const navBar = document.querySelector('nav');

const navArray = [navUL, page]

hamburger.addEventListener('click', () => { 
    hamburger.classList.toggle('change'); 
    navUL.classList.toggle('show'); 
}); 

navArray.forEach(item => {
    item.addEventListener('click', () =>{
        closeMenuBar();        
    });
});

function closeMenuBar() {
    navUL.classList.remove('show');
    hamburger.classList.remove('change');
}


let = preScroll = window.pageYOffset;

window.addEventListener('scroll', () => {
    let currScroll = window.pageYOffset;

    if(preScroll < currScroll){
        navBar.classList.add('hide');
        navUL.classList.remove('show');
        hamburger.classList.remove('change');
    }
    else{
        navBar.classList.remove('hide');
    }

    preScroll = currScroll;
})

