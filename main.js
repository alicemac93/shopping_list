// input targets
let newItem = document.getElementById("newItem");
let amountInput = document.getElementById("newAmount");
const producecheck = document.getElementById("produce-check");
const dairycheck = document.getElementById("dairy-check");
const meatcheck = document.getElementById("meat-check");
const drycheck = document.getElementById("dry-goods-check");
const homecheck = document.getElementById("home-check");
const AddBtn = document.getElementById("addButton");
const checkbox = document.querySelector("input");

let radio = document.getElementsByName("category");
let j = radio.length;

// category targets
let item = document.getElementById("itemValue");
let amount = document.getElementById("itemAmount");
let categories = document.getElementsByClassName("categories-list");


// remake to target.value for an event - not sure how it is with checkboxes

AddBtn.addEventListener("click", addNewItem);
function addNewItem() {
    // selected category
    let selectedCategory;
    for (let i = 0; i<j; i++){
        if (radio[i].checked) {selectedCategory = radio[i].value}   
 };
    let category;
    switch (selectedCategory) {
        case "produce":
            category = document.getElementById("produce")
            break;
        case "dairy":
                category = document.getElementById("dairy")
            break;
        case "meat":
                category = document.getElementById("meat")
            break;
        case "dry-goods":
                category = document.getElementById("dry-goods")
            break;
        default: "nevim"
            break;
    }
   
    const list = document.createElement("ul");
    category.appendChild(list);

    const item = document.createElement("li");
    item.innerHTML = newItem.value;
    item.setAttribute("class", "groceryItem")
    list.appendChild(item);

    const amount = document.createElement("span");
    amount.innerHTML = amountInput.value;
    amount.setAttribute("class", "amounts");
    list.appendChild(amount);

    const removeButton = document.createElement("span");
    removeButton.textContent = "x";
    removeButton.setAttribute("class", "removeButton")
    list.appendChild(removeButton);

    removeButton.onclick = function(){
        list.parentNode.removeChild(list);
    }
}

/* checked 
list.addEventListener("click", checked)
function checked(event){
    if (event.target.type = "LI")
    event.target.classList.toggle("checked");
}

NewCategoryButton.addEventListener("click", addNewCategory);

function addNewCategory() {

    const panel = document.createElement("div");
    
    const heading = document.createElement("h2");
    heading.innerHTML = //
    panel.appendChild(heading);

   // categories.parentNode.appendChild(categories);
   const newRadio = document.createElement("INPUT");
    newRadio.setAttribute("type", "radio");
    newRadio.textContent = .value // is it like that? 
}

*/