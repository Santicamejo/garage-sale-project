const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.mobile-menu')
const menuHambLogo = document.querySelector('.menu')


menuEmail.addEventListener('mouseover', toggleDesktopMenu);
menuHambLogo.addEventListener('click', togglehambMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  console.log("Menu de Email Activo!")
}

function togglehambMenu() {
  hambMenu.classList.toggle('inactive');
  console.log("Menu de hamburguesa Activo!");
}




