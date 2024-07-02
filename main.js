const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const hambMenu = document.querySelector('.mobile-menu')
const menuHambLogo = document.querySelector('.menu')
const aside = document.querySelector('.product-detail')
const cardsContainer =  document.querySelector('.cards-container')



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

const productList = [];
productList.push({
  name: 'Bike',
  price: '340',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Lego',
  price: '200',
  image: './fotos/lego.png',
});
productList.push({
  name: 'Keyboard',
  price: '189',
  image: './fotos/keyboard.png',
});
productList.push({
  name: 'Car',
  price: '12.000',
  image: './fotos/car.png',
});
productList.push({
  name: 'Phone',
  price: '2100',
  image: './fotos/phone.png',
});
productList.push({
  name: 'Bottle',
  price: '60',
  image: './fotos/bottle.png',
});
productList.push({
  name: 'Keychain',
  price: '12',
  image: './fotos/keychain.png',
});
// creamos los productos y les colocamos los datos, luego hacemos un push al array

function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg =  document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.append(productPrice, productName);
    // Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
  
    const productInfoFigure = document.createElement('figure');  
    const productImgCart = document.createElement('img');  
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}
// por orden creamos una funcion para poder mostrar cualquier array en el formato de carrito con el for y de parametro le pasamos arr que es el array que desemos
renderProducts(productList);