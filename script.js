/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navShrink() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Have the button change colour every time the cursor hovers and unhovers the button.
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
});
