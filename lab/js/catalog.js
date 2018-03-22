'use strict';

var select = document.getElementById('items');
var submitElement = document.getElementById('catalog');
var nameList = [];


function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var itemInput = document.getElementById('items');

  var getItemNames = localStorage.getItem('itemNamesArray');
  nameList = JSON.parse(getItemNames);
  console.log(nameList);

  for (var i = 0; i < nameList.length; i++) {
    var addOption = document.createElement('option');

    addOption.textContent = nameList[i];

    itemInput.appendChild(addOption);
    addOption.innerHTML = nameList[i];
    addOption.value = nameList[i];
  }
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