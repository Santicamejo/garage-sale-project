const emailMenu= document.querySelector('.navbar-email');
const userMenu = document.querySelector('.desktop-menu');
const menuCartICON = document.querySelector('.navbar-shopping-cart')
const hamburgerMenu = document.querySelector('.mobile-menu')
const hamburgerMenuICON = document.querySelector('.menu')
const carritoAside = document.querySelector('.product-detail')
const productcarritoAsideBOX =  document.querySelector('.cards-container')
const productCarritoAside = document.querySelector('.product-detail-bigcard');
const cruzProductCarritoAside = document.querySelector('.product-detail-close-bigcard');


emailMenu.addEventListener('click', toggleuserMenu);
hamburgerMenuICON.addEventListener('click', togglehamburgerMenu);
menuCartICON.addEventListener('click', toggleCarritocarritoAside);
cruzProductCarritoAside.addEventListener('click', cerrarProductcarritoAside);


function toggleuserMenu() {
  userMenu.classList.toggle('inactive');
  carritoAside.classList.add('inactive');
  productCarritoAside.classList.add('inactive');
}

function togglehamburgerMenu() {
  hamburgerMenu.classList.toggle('inactive');
  carritoAside.classList.add('inactive');
  productCarritoAside.classList.add('inactive');
}

function toggleCarritocarritoAside() {
  carritoAside.classList.toggle('inactive'); //*con el toggel lo que logramos es que la clase .inactive se desaparezca del carritoAside y asi mostrarlo//*
  hamburgerMenu.classList.add('inactive'); //*con el add lo que logramos es que la clase inactive se agrege al hamburgerMenu y asi desaparezca cuando se abre el carritoAside(CarritoDeCompras)//*
  userMenu.classList.add('inactive'); //*con el add lo que logramos es que la clase inactive se agrege al userMenu y asi desaparezca cuando se abre el carritoAside(CarritoDeCompras)//*
  productCarritoAside.classList.add('inactive');//*con el add lo que logramos es que la clase inactive se agrege al productCarritoAside y asi desaparezca cuando se abre el carritoAside(CarritoDeCompras)//*
}

function openProductcarritoAside(){
  productCarritoAside.classList.remove('inactive')
  hamburgerMenu.classList.add('inactive');
  userMenu.classList.add('inactive');
  carritoAside.classList.add('inactive');
}

function cerrarProductcarritoAside(){
  productCarritoAside.classList.add('inactive')
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
  price: '32.000',
  image: './fotos/car.png',
});
productList.push({
  name: 'Phone',
  price: '1200',
  image: './fotos/phone.png',
});
productList.push({
  name: 'Bottle',
  price: '3',
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
    productImg.addEventListener('click', openProductcarritoAside); 
  
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
  
    productcarritoAsideBOX.appendChild(productCard);
  }
}


// por orden creamos una funcion para poder mostrar cualquier array en el formato de Carrito con el for y de parametro le pasamos arr que es el array que desemos
renderProducts(productList);