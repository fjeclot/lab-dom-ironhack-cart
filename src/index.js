// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let priceElement = product.querySelector(".price span");
  let quantityElement = product.querySelector(".quantity input");

  let price = priceElement.innerText;
  let quantity = quantityElement.value;

  let subtotalPrice = price * quantity;

  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

  const products = document.querySelectorAll(".product");

  for (let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  
  let total = 0

  for(let i = 0; i < products.length; i++){
    let subtotal = Number(products[i].querySelector('.subtotal span').innerText);
    total += subtotal
  }

  let totalElement = document.querySelector("#total-value span");
  totalElement.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const buttonClicked = target;
  const productElement = buttonCliked.closest(".product");
  let totalPrice = document.querySelector("#total-value span");
  let productSubtotal = productElement.querySelector(".subtotal span");

  newPrice = Number(totalPrice.innerText) - number(productSubtotal.innerText);
  totalPrice.innerText = newPrice
  productElement.remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newProductInput = document.querySelector(`tfoot tr td input[type="text"]`);
  const newPriceInput = document.querySelector(`tfoot tr td input[type="number"]`);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
