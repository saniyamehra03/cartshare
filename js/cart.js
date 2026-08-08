const productInput = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addProductBtn = document.getElementById("addProductBtn");
console.log(addProductBtn);
 
addProductBtn.addEventListener("click" , function(){

    const product= productInput.value.trim();
    const quantity = quantityInput.value.trim();
    const price = priceInput.value.trim();

    console.log(product);
    console.log(quantity);
    console.log(price);
});