const hamburger = document.querySelector('.hamburger img');
const navLinks = document.querySelector('.nav-links')
const navBtn = document.getElementById('nav-btn');

hamburger.addEventListener('click', toggleNav);

function toggleNav() {
    navLinks.classList.toggle('open-nav');
    if(navLinks.classList.contains('open-nav')) {
        hamburger.src = 'images/icon-close.svg';
        navBtn.classList.remove('btn-primary');
        navBtn.classList.add('btn-secondary');
    }
    else {
        hamburger.src = 'images/icon-hamburger.svg';
    }
    
}