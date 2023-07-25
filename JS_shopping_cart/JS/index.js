let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () => {
    cart.classList.add('cart-active');
};

// close cart
closeCart.onclick = () => {
    cart.classList.remove('cart-active');
};

// delete cart / remove cart
if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",ready);
}
else{
    ready();
}

function ready(){
    let removeCart = document.querySelector('.cart-remove');
    for(let i=0; i<removeCart.length; i++){
        let deleteButton = deleteCart[i];
        deleteButton.addEventListener("click",deleteCartItem);
    } 
}

function deleteCartItem(e){
    let clickDeleteButton = e.target;
    clickDeleteButton.parentElement.remove();
    computeTotal();
}