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
});

document.querySelector('.landing_video').setAttribute('controls', 'false');
