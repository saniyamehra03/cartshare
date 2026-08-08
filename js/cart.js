const productInput = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");
const mobile = localStorage.getItem("mobileNumber");  
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
    const total = quantity * price;
    if (isNaN(total)) {
        alert("Please enter valid numbers for quantity and price.");
        return;
    }

    const addedBy = mobile; 
    if (!addedBy) {
        alert("User information not found. Please log in.");
        return;
    }

    console.log(product);
    console.log(quantity);
    console.log(price);
 

if(editingRow){
    editingRow.cells[0].textContent = product;
    editingRow.cells[1].textContent = quantity;
    editingRow.cells[2].textContent = price;
    editingRow.cells[3].textContent = total;

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
const totalCell = document.createElement("td");
const addedByCell = document.createElement("td");
const actionCell = document.createElement("td");

productCell.textContent = product;
quantityCell.textContent = quantity;
priceCell.textContent = price;
totalCell.textContent = total;
addedByCell.textContent = mobile;

row.appendChild(productCell);
row.appendChild(quantityCell);
row.appendChild(priceCell);
row.appendChild(totalCell);
row.appendChild(addedByCell);
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
