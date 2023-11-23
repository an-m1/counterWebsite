/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navShrink() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// to turn on and off the overlay effect


//For the main button. Includes the colour change on hover and the value incrementation
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("dynamicColorButton");
  var navbar = document.getElementById("myTopnav");

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getBrightness(hexColor) {
    // Convert hex color to RGB
    var r = parseInt(hexColor.substr(1, 2), 16);
    var g = parseInt(hexColor.substr(3, 2), 16);
    var b = parseInt(hexColor.substr(5, 2), 16);

    // Calculate luminance
    return r * 0.299 + g * 0.587 + b * 0.114;
  }

  function changeButtonColor() {
    var buttonColor = getRandomColor();
    button.style.backgroundColor = buttonColor;

    // Change text color based on brightness
    if (getBrightness(buttonColor) > 186) {
      // 186 is a generally good threshold for deciding between black and white text
      button.style.color = "black";
    } else {
      button.style.color = "white";
    }
  }

  button.onmouseover = function () {
    navbar.classList.add("navbar-hidden");
    changeButtonColor();
  };

  button.onmouseleave = function () {
    navbar.classList.remove("navbar-hidden");
    changeButtonColor();
  };

  button.onclick = function () {
    changeButtonColor();
    if (Number(button.innerHTML) < 999999999) {
      button.innerHTML = Number(button.innerHTML) + 1;
    }
  };
});

//For the 'go to top' button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

