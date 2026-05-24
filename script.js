let cart = [];

function addToCart(productName){

cart.push(productName);

document.getElementById("cart-count").innerText = cart.length;

alert(productName + " added to cart!");

console.log(cart);

}

function searchProducts(){

let input =
document.getElementById("search")
.value
.toLowerCase();

let products =
document.querySelectorAll(".product");

products.forEach(product=>{

let productName =
product.querySelector("h3")
.innerText
.toLowerCase();

if(productName.includes(input))
{
product.style.display="block";
}
else
{
product.style.display="none";
}

});

}