console.log("Adnrie Quinatac-an");
console.log("5 / 24 / 2024");
console.log("5月 24日 24年");
console.log("Eccomerce Web App");
console.log("Bat ang pogi ko?");
console.log("Single po ako lmao");


var cartItems = document.getElementById('cart-items');
var holder = document.getElementById('holder');

function item(el,event) {
    event.preventDefault(); 
    var els = el;
    var item = els.parentNode.parentNode.parentNode;
    item.parentNode.removeChild(item); 
}

setInterval(()=> {
    // console.log("Hello");
    // console.log(cartItems.childNodes.length);
    if (cartItems.childNodes.length <= 2) {
        holder.style.display = "block";
    } 
},500)
