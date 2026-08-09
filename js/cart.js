const productInput = document.getElementById("product");    
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");
const mobile = localStorage.getItem("mobileNumber");  
const printBtn = document.getElementById("printBtn");
const notification = document.getElementById("notification");
const roomCode = localStorage.getItem("roomCode");
console.log("Current Room:", roomCode);

const cartStorageKey = "cardProducts_" + roomCode;
console.log("Cart Storage Key:", cartStorageKey);

function showNotification(message, type) {
    notification.textContent = message;
    notification.className="alert alert-"+ type;

    setTimeout(function() {
        notification.classList.add("d-none");
    },3000);
}
let editingProduct = null;
let cardProducts = [];

const savedProducts = localStorage.getItem(cartStorageKey);
if(savedProducts){
    cardProducts = JSON.parse(savedProducts);
}

function saveProducts(){
    localStorage.setItem(
        cartStorageKey,
        JSON.stringify(cardProducts)
    );
}

function renderProducts() {
    productList.innerHTML = "";
    cardProducts.forEach(function(productData){

        const row = document.createElement("tr");
        const productCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const totalCell = document.createElement("td");
        const addedByCell = document.createElement("td");
        const actionCell = document.createElement("td");
        actionCell.className="action-cell";

        productCell.textContent = productData.product;
        quantityCell.textContent = productData.quantity;
        priceCell.textContent = productData.price;
        totalCell.textContent = productData.total;
        addedByCell.textContent = productData.addedBy;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "btn btn-danger";
        
        deleteBtn.addEventListener("click", function() {

        const index = cardProducts.indexOf(productData);
           if(index !==-1){
            cardProducts.splice(index,1);
             saveProducts();
             renderProducts();
             showNotification("Product deleted successfully!", "danger");
           }
    });
        const editBtn = document.createElement("button")

         editBtn.textContent="Edit"
         editBtn.className="btn btn-primary me-2"
           
            editBtn.addEventListener("click" , function(){
                productInput.value = productData.product;
                quantityInput.value = productData.quantity;
                priceInput.value = productData.price;
            
            editingProduct = productData;
        
            addProductBtn.textContent = "Update Product"
        
    });

    actionCell.appendChild(deleteBtn);
    actionCell.appendChild(editBtn);

    row.appendChild(productCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(totalCell);
    row.appendChild(addedByCell);
    row.appendChild(actionCell);

    productList.appendChild(row);
    });
}
renderProducts();

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

    if(!mobile){
        alert("Please login first.");
        return;
    }

if(editingProduct){
        editingProduct.product = product;
        editingProduct.quantity = quantity;
        editingProduct.price = price;
        editingProduct.total = total;

        saveProducts();
        editingProduct = null;

     addProductBtn.textContent ="Add Product";
     productInput.value ="";
     quantityInput.value ="";
     priceInput.value ="";
       
     renderProducts();
     showNotification("Product updated successfully!", "success");
     return;
}

    const productData = {
        product: product,
        quantity: quantity,
        price: price,
        total: total,
        addedBy: mobile
    };

    cardProducts.push(productData);
    saveProducts();
    renderProducts();

    showNotification("Product added successfully!", "success");

    productInput.value = "";
    quantityInput.value = "";
    priceInput.value = "";

});
 printBtn.addEventListener("click" , function(){
        window.print();
    });

window.addEventListener("storage" ,function (event) {
    if(event.key === cartStorageKey){

        const UpdatedProducts = localStorage.getItem(cartStorageKey);   
        if(UpdatedProducts){
         cardProducts = JSON.parse(updatedProducts);
        }
        else
        { 
            cardProducts = [];
        }
         renderProducts();
         showNotification(
            "Cart updated by another participant!",
            "info"
         );
    }
});