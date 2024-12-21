const emailMenu= document.querySelector('.header-email');
const userMenu = document.querySelector('.desktop-menu');
const menuCartICON = document.querySelector('.shoppingBox')
const hamburgerMenu = document.querySelector('.mobile-menu')
const hamburgerMenuICON = document.querySelector('.menu')
const carritoAside = document.querySelector('.product-detail')
const productcarritoAsideBOX =  document.querySelector('.cards-container')
const productCarritoAside = document.querySelector('.container-product-detail-bigcard');
const cruzProductCarritoAside = document.querySelector('.product-detail-close-bigcard');


emailMenu.addEventListener('click', toggleuserMenu);
hamburgerMenuICON.addEventListener('click', togglehamburgerMenu);
menuCartICON.addEventListener('click', toggleCarritocarritoAside);
productCarritoAside.addEventListener('click', cerrarProductcarritoAside)
// cruzProductCarritoAside.addEventListener('click', cerrarProductcarritoAside);


document.addEventListener('DOMContentLoaded', (event) => { 
  const contenedores = document.querySelectorAll('.product-card'); 
  contenedores.forEach(contenedor => { 
      contenedor.addEventListener('click', () => { 
      generateAside(contenedor); 
  }); 
  
}); 
});

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
  //productCarritoAside.classList.remove('inactive')
  hamburgerMenu.classList.add('inactive');
  userMenu.classList.add('inactive');
  carritoAside.classList.add('inactive');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductcarritoAside);
}

function cerrarProductcarritoAside(){
  productCarritoAside.classList.add('inactive')
}


const productList = [];

// creamos los productos y les colocamos los datos, luego hacemos un push al array

productList.push({
  name: 'Bike',
  price: '340,00',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  dsc:"Iphone 12 128gb nuevo",
  tag: "Sports",
});
productList.push({
  name: 'Iphone 12 128gb',
  price: '799,00',
  image: './products/iphone.png',
  dsc:"Iphone 12 128gb nuevo",
  tag: "Electronics",
});


function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
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
    productImgCart.setAttribute('src', './icons/cajaAbierta.svg');
  
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    productcarritoAsideBOX.appendChild(productCard);
  }
}

function generateAside(item) {
  const asideer = document.createElement('aside');
  asideer.classList.add('product-detail-bigcard');

  const crossBox = document.createElement('div');
  crossBox.classList.add('product-detail-close-bigcard')
  
    const crossBoxImg = document.createElement('img');
    crossBoxImg.setAttribute('src', "./icons/icon_close.png");

    const productImage = document.createElement('img');
    productImage.setAttribute('src', item.image);
//  productImage.classList.add('')
  
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info-bigcard');

    const price = document.createElement('p');
    price.innerText = '$' + item.price;

    const name = document.createElement('p');
    name.innerText = item.name;

    const description = document.createElement('p');
    description.innerText = item.dsc;
    
  const button = document.createElement('button');
  button.classList.add('primary-button-bigcard');

    const buttonImg = document.createElement('img');
    buttonImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
  
    const addToCart = document.createElement('p');
    addToCart.innerText = "Agregar al carrito";

    crossBox.appendChild(crossBoxImg)

    productInfo.appendChild(name);
    productInfo.appendChild(price);
    productInfo.appendChild(description);

    button.appendChild(buttonImg);
    button.appendChild(addToCart);

    asideer.appendChild(crossBox);
    asideer.appendChild(productImage);
    asideer.appendChild(productInfo);
    asideer.appendChild(button);

    productCarritoAside.appendChild(asideer);
}
// por orden creamos una funcion para poder mostrar cualquier array en el formato de Carrito con el for y de parametro le pasamos arr que es el array que desemos
renderProducts(productList);