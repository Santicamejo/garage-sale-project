const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const hambMenu = document.querySelector('.mobile-menu')
const menuHambLogo = document.querySelector('.menu')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambLogo.addEventListener('click', togglehambMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
  console.log("Menu de Email Activo!");
}

function togglehambMenu() {
  hambMenu.classList.toggle('inactive');
  aside.classList.add('inactive');

  console.log("Menu de hamburguesa Activo!");
}

function toggleCarritoAside() {
  aside.classList.toggle('inactive'); //*con el toggel lo que logramos es que la clase .inactive se desaparezca del aside y asi mostrarlo//*
  hambMenu.classList.add('inactive'); //*con el add lo que logramos es que la clase inactive se agrege al hambMenu y asi desaparezca cuando se abre el aside(CarritoDeCompras)//*
  desktopMenu.classList.add('inactive'); //*con el add lo que logramos es que la clase inactive se agrege al desktopMenu y asi desaparezca cuando se abre el aside(CarritoDeCompras)//*
}




