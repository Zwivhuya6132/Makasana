//Creating variable that I'll use later.
const openBtn = document.querySelector('.open-btn');
const openCart = document.querySelector('.open-cart');
const openMenu = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.close-btn');
const closeCart = document.querySelector('.close-cart');
const offcanvasMenu = document.querySelector('.offcanvas-account');
const sideMenu = document.querySelector('.dropdown-menu');
const offcanvasCart = document.querySelector('.offcanvas-cart');

// Add/Remove a class called "on" so that it can open/close the offcanvas for My account.
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

// Toggle the Side Menu when clicking the openMenu button.
// openMenu.addEventListener('click', function(e){
//   e.preventDefault();
//   sideMenu.classList.toggle('on');
// });

// Close the Side Menu when clicking the closeMenu button.
closeMenu.addEventListener('click', function(e) {
  e.preventDefault();
  sideMenu.classList.remove('on');
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

// // Slide show Java Script
// let slideIndex = 0;
// showSlides();

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// Make the slideshopw automatic 
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slides");
//     let dots = document.getElementsByClassName("dot");

//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 5000); // Change image every 2 seconds
//   }

//   showSlides(slideIndex);

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

let slideIndex = 1; // Initialize slideIndex to 1

// Call the showSlides function when the page loads to display the initial slide.
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
let autoSlideIndex = 0; // Initialize autoSlideIndex to 0

function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  autoSlideIndex++;
  
  if (autoSlideIndex > slides.length) {
    autoSlideIndex = 1;
  }
  
  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and set the corresponding dot as active
  slides[autoSlideIndex - 1].style.display = "block";
  dots[autoSlideIndex - 1].className += " active";
  
  // Change slide every 2 seconds (2000 milliseconds)
  setTimeout(autoShowSlides, 2000);
}

// Call the autoShowSlides function to start the automatic slideshow
autoShowSlides();

let currentSlide = 1;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
  if (n > slides.length) {
    currentSlide = 1;
  }
  if (n < 1) {
    currentSlide = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translateX(-' + (currentSlide - 1) * 100 + '%)';
  }
}

function changeSlide(n) {
  showSlide(currentSlide += n);
}

// Initialize the carousel with the first slide
showSlide(currentSlide);

