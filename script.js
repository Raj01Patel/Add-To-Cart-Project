// Button -1
let noProduct = document.getElementById("no-product");
let pos = document.getElementById("pos_btn1");
let neg = document.getElementById("neg_btn");
let counter = document.getElementById("count_prod1");
let total = document.getElementById("updateTotal");

let newDiv = document.createElement("tr");
let childDiv = document.createElement("td");
childDiv.classList.add("td1");
let childDiv2 = document.createElement("td");
childDiv2.classList.add("td1");

let cart = document.getElementById("right_table");
console.log(cart);
newDiv.appendChild(childDiv);
newDiv.appendChild(childDiv2);

let i = 0; let incre;

function addProduct() {
    incre = 100;
    i++;
    cart.appendChild(newDiv);
    newDiv.classList.add("cart");
    counter.innerText = i;
    childDiv.innerText = "Dosa";
    childDiv2.innerText = i + "*" + incre;
    console.log(newDiv);
    totalPrice(incre);
}

let price = 0;
function totalPrice(add) {
    price += add;
    total.innerText = `Total Rs : ${price}`;
}
function reduceTotal(add) {
    price -= add;
    total.innerText = `Total Rs : ${price}`;
}

function removeProduct() {
    if (i > 0)
        --i;
    counter.innerText = i;
    childDiv.innerText = "Dosa"
    childDiv2.innerText = i + "*" + incre;
    if (i == 0) {
        childDiv.innerText = ""
        childDiv2.innerText = "";
        cart.removeChild(newDiv);
    }
    reduceTotal(100);
}




// Button -2

let pos1 = document.getElementById("pos1_btn");
let neg1 = document.getElementById("neg1_btn");
let counter1 = document.getElementById("count_prod2");

let newDiv1 = document.createElement("tr");
let childDiv1 = document.createElement("td");
childDiv1.classList.add("td1");
let childDiv22 = document.createElement("td");
childDiv22.classList.add("td1");
let cart1 = document.getElementById("right_table");
console.log(cart1);
newDiv1.appendChild(childDiv1);
newDiv1.appendChild(childDiv22);

let j = 0; let incre1;
function addProduct1() {
    incre1 = 200;
    j++;
    cart1.appendChild(newDiv1);
    newDiv1.classList.add("cart");
    counter1.innerText = j;
    childDiv1.innerText = "Poori"
    childDiv1.style.marginRight = "10px"
    childDiv22.innerText = j + "*" + incre1;
    console.log(newDiv1);
    totalPrice(incre1);

}
function removeProduct1() {
    if (j > 0)
        --j;
    counter1.innerText = j;
    childDiv1.innerText = "Poori"
    childDiv22.innerText = j + "*" + incre1;
    if (j == 0) {
        childDiv1.innerText = ""
        childDiv22.innerText = "";
        cart.removeChild(newDiv1);
    }
    reduceTotal(200);
}


// Botton -3

let pos2 = document.getElementById("pos2_btn");
let neg2 = document.getElementById("neg2_btn");
let counter2 = document.getElementById("count_prod3");

let newDiv2 = document.createElement("tr");
let childDiv1_btn3 = document.createElement("td");
childDiv1_btn3.classList.add("td1");
let childDiv2_btn3 = document.createElement("td");
childDiv2_btn3.classList.add("td1");
let cart2 = document.getElementById("right_table");
console.log(cart2);
newDiv2.appendChild(childDiv1_btn3);
newDiv2.appendChild(childDiv2_btn3);

let k = 0; let incre2;
function addProduct2() {
    incre2 = 300;
    k++;
    cart2.appendChild(newDiv2);
    newDiv2.classList.add("cart");
    counter2.innerText = k;
    childDiv1_btn3.innerText = "Idly"
    childDiv2_btn3.innerText = k + "*" + incre2;
    console.log(newDiv2);
    totalPrice(incre2);

}
function removeProduct2() {
    if (k > 0)
        --k;
    counter2.innerText = k;
    childDiv1_btn3.innerText = "Idly"
    childDiv2_btn3.innerText = k + "*" + incre2;
    if (k == 0) {
        childDiv1_btn3.innerText = "";
        childDiv2_btn3.innerText = "";
        cart.removeChild(newDiv2);
    }
    reduceTotal(300);
}


pos.addEventListener("click", addProduct);
neg.addEventListener("click", removeProduct);
pos1.addEventListener("click", addProduct1);
neg1.addEventListener("click", removeProduct1);
pos2.addEventListener("click", addProduct2);
neg2.addEventListener("click", removeProduct2);