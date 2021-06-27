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
    reset: true,
})

sr.reveal(`.home__data-top,.projects__title`,{
    origin: 'top',
    interval: 100,
    duration: 1000.,
    distance: '60px'
})
sr.reveal(`.home__data-title,.projects__description`,{
    origin: 'top',
    interval: 100,
    duration: 1500,
    distance: '60px'
})
sr.reveal(`.home__data-subtitle`,{
    origin: 'top',
    interval: 100,
    duration: 2000,
    distance: '60px'
})

sr.reveal(`.projects__card`,{
    origin: 'top',
    interval: 100,
    duration: 1000,
    distance: '0px'
})
sr.reveal(`.projects__title`,{
    origin: 'top',
    interval: 100,
    duration: 1000,
    distance: '0px'
})
sr.reveal(`.projects__description`,{
    origin: 'top',
    interval: 100,
    duration: 1500,
    distance: '0px'
})
sr.reveal(`.projects__button`,{
    origin: 'top',
    interval: 100,
    duration: 2000,
    distance: '0px'
})
// sr.reveal(`.projects__title`,{
//     origin: 'top',
//     interval: 100,
//     duration: 2000
// })


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("projects__images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}