// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
let price = product.querySelector('.price span')
let quantity = product.querySelector('.quantity input')
let subtotal = product.querySelector('.subtotal span')
let newSubtotal = Number(price.innerText) * (quantity.value)
subtotal = subtotal.innerText = newSubtotal
 return newSubtotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0
  let allProducts = document.querySelectorAll('.product')
 for (let i=0 ; i < allProducts.length ; i ++) {
    sum += updateSubtotal(allProducts[i])
} 

  //  ITERATION 3
  let totalValue = document.querySelector('#total-value span')
 totalValue.innerText = sum
}

// ITERATION 4

function removeProduct(event) {
  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  // let currentTarget = document.getElementsByTagName('tbody')
  // currentTarget.removeChild('.product')
}

// ITERATION 5

function createProduct() {
  // let newProduct = document.createElement('tr')
  // tbody.appendChild(newProduct)
  // /... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn btn-remove');
  removeBtn.addEventListener('click', removeProduct);
});
