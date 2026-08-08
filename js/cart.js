const productInput = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");
console.log(addProductBtn);
 
addProductBtn.addEventListener("click" , function() 
{

    const product= productInput.value.trim();
    if(product === "") {
        alert("Please enter the product name.");
        return;
    }
    const quantity = quantityInput.value.trim();
    if(quantity === "") {
        alert("Please enter the quantity.");
        return;
    }

    const price = priceInput.value.trim();
    if(price === "") {
        alert("Please enter the price.");
        return;
    }

    console.log(product);
    console.log(quantity);
    console.log(price);

const row = document.createElement("tr");

const productCell = document.createElement("td");
const quantityCell = document.createElement("td");
const priceCell = document.createElement("td");
const actionCell = document.createElement("td");

productCell.textContent = product;
quantityCell.textContent = quantity;
priceCell.textContent = price;
 
row.appendChild(productCell);
row.appendChild(quantityCell);
row.appendChild(priceCell);
row.appendChild(actionCell);

productList.appendChild(row);
});