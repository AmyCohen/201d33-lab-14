'use strict';

// TODO: Create a "Cart" constructor that holds quantity, item, an an array of items in the cart
var itemsArray = [];

var Cart = function (qty, item) {
  this.quantity = qty;
  this.item = item;
  itemsArray.push(this.item);
};
console.log(Cart);

// Product Contructor
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
  Product.nameList.push(this.name);
};
Product.nameList = [];

Product.allProducts = [];
console.log();

function generateCatalog() {

  var items = localStorage.getItem('listOfProducts');
  var productList = JSON.parse(items);

  var getItemNames = localStorage.getItem('itemNamesArray');

  var nameList = JSON.parse(getItemNames);
  // }

  if (nameList && nameList.length) {
    Product.nameList = nameList;
  }
  if (productList && productList.length) {
    Product.allProducts = productList;

    return;
  }

  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');


  var saveItems = JSON.stringify(Product.allProducts);
  localStorage.setItem('listOfProducts', saveItems);

  var saveItemNames = JSON.stringify(Product.nameList);
  localStorage.setItem('itemNamesArray', saveItemNames);

  var imgInput = document.getElementsByClassName('deck col-1');

  for (var i = 0; i < nameList.length; i++) {

    //create an image tag and populate it now
    var addImgs = document.createElement('img');

    // addImgs.setAttribute('src', '');
    // addImgs.setAttribute('alt', '');

    document.getElementsByClassName('deck col-1').appendChild('addImgs');
    // imgInput.appendChild(addImgs);
    // addImgs.innerHTML = itemsArray[i];
    // addImgs.value = itemsArray[i];
  }
}

new Product('assets/bag.jpg', 'Bag');
new Product('assets/banana.jpg', 'Banana');
new Product('assets/bathroom.jpg', 'Bathroom');
new Product('assets/boots.jpg', 'Boots');
new Product('assets/breakfast.jpg', 'Breakfast');
new Product('assets/bubblegum.jpg', 'Bubblegum');
new Product('assets/chair.jpg', 'Chair');
new Product('assets/cthulhu.jpg', 'Cthulhu');
new Product('assets/dog-duck.jpg', 'Dog-Duck');
new Product('assets/dragon.jpg', 'Dragon');
new Product('assets/pen.jpg', 'Pen');
new Product('assets/pet-sweep.jpg', 'Pet Sweep');
new Product('assets/scissors.jpg', 'Scissors');
new Product('assets/shark.jpg', 'Shark');
new Product('assets/sweep.png', 'Sweep');
new Product('assets/tauntaun.jpg', 'Taun-Taun');
new Product('assets/unicorn.jpg', 'Unicorn');
new Product('assets/usb.gif', 'USB');
new Product('assets/water-can.jpg', 'Water Can');
new Product('assets/wine-glass.jpg', 'Wine Glass');


// Initialize the app
generateCatalog();

// console.log(generateCatalog);
