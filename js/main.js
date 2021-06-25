/*================ SHOW MENU ================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* validate if constant exixts */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* validate if constant exixts */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*================ REMOVE MENU MOBILE ================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    reset: true,
})

sr.reveal(`.home__data-top`,{
    origin: 'top',
    interval: 100,
    duration: 1000
})
sr.reveal(`.home__data-title`,{
    origin: 'top',
    interval: 100,
    duration: 1500
})
sr.reveal(`.home__data-subtitle`,{
    origin: 'top',
    interval: 100,
    duration: 2000
})