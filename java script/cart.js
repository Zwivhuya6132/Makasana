// JavaScript for slideshow
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll('.slideshow-sec .slides');
  let dots = document.querySelectorAll('.slideshow-sec .dot');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// JavaScript for carousel
let currentCarouselSlide = 0;
const carouselSlides = document.querySelectorAll('.carousel-container .carousel-slide');

function showCarouselSlide(n) {
  if (n >= carouselSlides.length) {
    currentCarouselSlide = 0;
  }
  if (n < 0) {
    currentCarouselSlide = carouselSlides.length - 1;
  }
  for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].style.transform = 'translateX(-' + currentCarouselSlide * 100 + '%)';
  }
}

function changeCarouselSlide(n) {
  showCarouselSlide(currentCarouselSlide += n);
}

// Initialize both the slideshow and the carousel
showSlides(slideIndex);
showCarouselSlide(currentCarouselSlide);
