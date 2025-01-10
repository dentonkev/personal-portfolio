document.addEventListener('DOMContentLoaded', () => {
  let menu = document.getElementById('menu');
  let menuNav = document.querySelector('.menu_nav');
  let exit = document.querySelector('.exit');

  menu.addEventListener('click', () => {
      menuNav.style.display = 'flex';
  });

  exit.addEventListener('click', () => {
      menuNav.style.display = 'none';
  });

  new Typed("#typed", {
    strings: ["computer science @ unsw.", "IT support officer @ warakirri college."], 
    typeSpeed: 30, 
    backSpeed: 30, 
    loop: true, 
    backDelay: 1000, 
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
  });
});
