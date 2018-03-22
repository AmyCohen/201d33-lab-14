'use strict';

var submitElement = document.getElementById('catalog');
var nameList = [];


function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var addOption = document.createElement('option');
  document.getElementById('items').appendChild(addOption);

  var getItemNames = localStorage.getItem('itemNamesArray');
  nameList = JSON.parse(getItemNames);
  console.log(nameList);

  document.getElementsByTagName('option')[0].setAttribute('id', 'namesList');
}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();


  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
}

function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage

}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)
submitElement.addEventListener('submit', handleSubmit);

// Start it up ...
populateForm();