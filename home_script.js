
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var slideInterval;

function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // First, make all slides inactive and transparent
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }

  // Then, update the active slide
  slides[slideIndex - 1].className += " active";

  // Update dot navigation
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[slideIndex - 1].className += " active-dot";

  clearTimeout(slideInterval);
  slideInterval = setTimeout(function() { showSlides(slideIndex += 1); }, 4500);
}



function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

slideIndex = 1;
showSlides(slideIndex);
