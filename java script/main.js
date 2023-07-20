//Creating variable that I'll use later.
const openBtn = document.querySelector('.open-btn');
const openCart = document.querySelector('.open-cart');
// const openMenu = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-btn');
const closeCart = document.querySelector('.close-cart');
const offcanvasMenu = document.querySelector('.offcanvas-account');
const sideMenu = document.querySelector('.dropdown-menu');
const offcanvasCart = document.querySelector('.offcanvas-cart');



// Add/Remove a class called "on" so that it can open/close the offcanvas for My accont.
openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.toggle('on');
});

// Close the Offcanvas for My account when clicking the close button.
closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('on');
});

// Add/Remove a class called "on" so that it can open/close the offcanvas for Cart.
openCart.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasCart.classList.toggle('on');
});

// Close the Cart when clicking the close button.
closeCart.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasCart.classList.remove('on');
});



// Update Total
function updatetotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let price = parseFloat(priceElement.innerText.replace("R", ""));
        let quantity = quantityElement.value;
        total = total + (price * quantity);

        // if price containsome cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = 'R' + total;
    }
}

// Slide show Java Script
let slideIndex = 0;
showSlides();

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Make the slideshopw automatic 
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }