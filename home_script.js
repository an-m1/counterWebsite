var slideIndex = 0;
var timeout; // Define the timeout variable globally

// Function to manually select a slide
function currentSlide(n) {
  slideIndex = n - 1; // Adjust slideIndex
  showSlides(); // Show the selected slide
  clearTimeout(timeout); // Clear the existing timer
  timeout = setTimeout(showSlides, 30000); // Restart the timer
}

// Function to automatically cycle through slides
function showSlides() {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // Hide all slides and deactivate all dots
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  // Move to the next slide, looping back to the first slide if necessary
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  // Display the current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";

  // Set the timer for the next slide change
  timeout = setTimeout(showSlides, 40000); // Change image every 30 seconds
}

// Start the slideshow
showSlides();
