const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const hambMenu = document.querySelector('.mobile-menu')
const menuHambLogo = document.querySelector('.menu')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click ', toggleDesktopMenu);
menuHambLogo.addEventListener('click', togglehambMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  console.log("Menu de Email Activo!")
}

function togglehambMenu() {
  hambMenu.classList.toggle('inactive');
  console.log("Menu de hamburguesa Activo!");
}

function toggleCarritoAside() {
  const isMobileMenuOpen = !hambMenu.classList.contains('inactive');
  const isAside = !aside.classList.contains('inactive');


  aside.classList.toggle('inactive');
  if (hambMenu.classList.contains('inactive')) {

  }
}




