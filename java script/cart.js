if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let removeCartItems = document.getElementsByClassName('cart-remove-con');
    for (let i = 0; i < removeCartItems.length; i++){
        let button = removeCartItems[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i =0; i < quantityInputs.length; i++){
        let  input = quantityInputs[i];
        input.addEventListener('change', quntityChanged);
    }

    let addToCartbuttons = document.getElementsByClassName('add-to-cart');
    for (var i =0; i < addToCartbuttons.length; i++){
        let button = addToCartbuttons[i];
        button.addEventListener('click', addToCartClicked);
    }
    
    // Load cart items from localStorage
    let storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
        for (let i = 0; i < storedCartItems.length; i++) {
            let cartItem = storedCartItems[i];
            addItemToCart(cartItem.tittle, cartItem.price, cartItem.imageSrc);
        }
        // Update cart count
        document.getElementsByClassName('cart-count')[0].innerText = storedCartItems.length;
    }
    
    updateCartTotal();
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
    
    // Update cart count
    let cartItems = document.getElementsByClassName('cart-box');
    document.getElementsByClassName('cart-count')[0].innerText = cartItems.length;
    
    // Store cart items in localStorage
    storeCartItems();
}

function quntityChanged(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
    
    // Store cart items in localStorage
    storeCartItems();
}

function addToCartClicked(event){
    let cartLength = document.getElementsByClassName('cart-content').length;
    document.getElementsByClassName('cart-count')[0].innerText = cartLength;
    let button = event.target;
    let shopItem = button.parentElement.parentElement.parentElement;
    let tittle = shopItem.getElementsByClassName('shop-item-tittle')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(tittle, price, imageSrc);
    addItemToCart(tittle, price, imageSrc);
    updateCartTotal();
    
    // Update cart count
    let cartItems = document.getElementsByClassName('cart-box');
    document.getElementsByClassName('cart-count')[0].innerText = cartItems.length;
    
    // Store cart items in localStorage
    storeCartItems();
}

// function addToCartClicked(event) {
//     let button = event.target;
//     let shopItem = button.parentElement.parentElement;
//     let title = shopItem.getElementsByClassName('shop-item-tittle')[0].innerText;
//     let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
//     let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;

//     // Check if the item already exists in the cart
//     let cartItems = document.getElementsByClassName('cart-box');
//     for (let i = 0; i < cartItems.length; i++) {
//         let cartItem = cartItems[i];
//         let cartTitle = cartItem.getElementsByClassName('cart-product-tittle')[0].innerText;
//         if (cartTitle === title) {
//             let quantityElement = cartItem.getElementsByClassName('cart-quantity')[0];
//             let quantity = parseInt(quantityElement.value);
//             quantity++;
//             quantityElement.value = quantity;

//             updateCartTotal();
//             storeCartItems();
//             updateCartCount();
//             return;
//         }
//     }

//     // If the item doesn't exist in the cart, add it as a new item
//     addItemToCart(title, price, imageSrc);
//     updateCartTotal();
//     storeCartItems();
//     updateCartCount();
// }






function addItemToCart(tittle, price, imageSrc){
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-box');
    let cartItems = document.getElementsByClassName('cart-content')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-product-tittle');
    for(let i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == tittle){
            alert(cartItemNames);
            return;
        }
    }
    let cartRowContent = `
        <img src="${imageSrc}" class="cart-img">

        <div class="detail-box">
            <p class="cart-product-tittle">${tittle}</p>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <small class="cart-remove-con">
            <i class="fa-solid fa-trash-can cart-remove" ></i>
        </small>`;

    cartRow.innerHTML = cartRowContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quntityChanged);
    
    // Store cart items in localStorage
    storeCartItems();
}

function updateCartTotal() {
    let cartContentContainer = document.getElementsByClassName('cart-content')[0];
    let cartRows = cartContentContainer.getElementsByClassName('cart-box');
    let total =  0;
    for (let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity')[0];
        let price = parseFloat(priceElement.innerText.replace('R', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerText = 'R' + total;
    
    // Store cart items in localStorage
    storeCartItems();
}

function storeCartItems() {
    let cartItems = document.getElementsByClassName('cart-box');
    let items = [];
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let tittle = cartItem.getElementsByClassName('cart-product-tittle')[0].innerText;
        let price = cartItem.getElementsByClassName('cart-price')[0].innerText;
        let imageSrc = cartItem.getElementsByClassName('cart-img')[0].src;
        items.push({ tittle, price, imageSrc });
    }
    localStorage.setItem('cartItems', JSON.stringify(items));
}
