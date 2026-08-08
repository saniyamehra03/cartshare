const productInput = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");
console.log(addProductBtn);
let editingRow = null;
 
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
 

if(editingRow){
    editingRow.cells[0].textContent = product;
    editingRow.cells[1].textContent = quantity;
    editingRow.cells[2].textContent = price;

    editingRow = null;
    
    addProductBtn.textContent ="Add Product";
     productInput.value ="";
     quantityInput.value ="";
     priceInput.value ="";
     return;

}
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

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.className = "btn btn-danger";

const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.className ="btn btn-primary me-2";

editBtn.addEventListener("click", function(){
    productInput.value = product;
    quantityInput.value = quantity;
    priceInput.value = price;

    addProductBtn.textContent = "Update Product";
     editingRow = row;
})

deleteBtn.addEventListener("click", function() {
    row.remove();
});
actionCell.appendChild(deleteBtn);
actionCell.appendChild(editBtn);
productList.appendChild(row);
});
