/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navShrink() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
    if (isRandom) {
      changeButtonColor();
    }
  };

  button.onmouseleave = function () {
    navbar.classList.remove("navbar-hidden");
    if (isRandom) {
      changeButtonColor();
    }
  };

  button.onclick = function () {
    if (isRandom) {
      changeButtonColor();
    }
    if (Number(button.innerHTML) < 999999999) {
      button.innerHTML = Number(button.innerHTML) + 1;
    }
  };

  // for colour search with autocomplete in the change colour overlay
  document.getElementById("colorSearch").addEventListener("input", function () {
    var showSnackbar = false;
    const colorValue = getColorValue(this.value);
    if (colorValue) {
      // sets the button to the inputted colour
      var buttonColor = colorValue;
      button.style.backgroundColor = buttonColor;

      // Change text color based on brightness
      if (getBrightness(buttonColor) > 186) {
        // 186 is a generally good threshold for deciding between black and white text
        button.style.color = "black";
      } else {
        button.style.color = "white";
      }
      // document.getElementById("dynamicColorButton").value = colorValue;
      // document.getElementById("changeColorButton").style.backgroundColor = colorValue;
    } else {
      var showSnackbar = true;
    }
  });

  function getColorValue(colorName) {
    const colors = {
      red: "#ff0000",
      green: "#00ff00",
      blue: "#0000ff",
      yellow: "#ffff00",
      purple: "#800080",
      black: "#000000",
      white: "#ffffff",
      gray: "#808080",
      lime: "#00ff00",
      teal: "#008080",
      silver: "#c0c0c0",
      maroon: "#800000",
      olive: "#808000",
      navy: "#000080",
      fuchsia: "#ff00ff",
      aqua: "#00ffff",
      orange: "#ffa500",
      pink: "#ffc0cb",
      brown: "#a52a2a",
      gold: "#ffd700",
      indigo: "#4b0082",
      violet: "#ee82ee",
      coral: "#ff7f50",
      chocolate: "#d2691e",
      magenta: "#ff00ff",
      tan: "#d2b48c",
      cyan: "#00ffff",
      beige: "#f5f5dc",
      salmon: "#fa8072",
      olivedrab: "#6b8e23",
      darkred: "#8b0000",
      skyblue: "#87ceeb",
      plum: "#dda0dd",
      darkgreen: "#006400",
      darkblue: "#00008b",
      lightgreen: "#90ee90",
      lightblue: "#add8e6",
      royalblue: "#4169e1",
      midnightblue: "#191970",
      forestgreen: "#228b22",
      darkslategray: "#2f4f4f",
      limegreen: "#32cd32",
      deepskyblue: "#00bfff",
      firebrick: "#b22222",
      darkorchid: "#9932cc",
      sienna: "#a0522d",
      turquoise: "#40e0d0",
      steelblue: "#4682b4",
      slateblue: "#6a5acd",
      seagreen: "#2e8b57",
      saddlebrown: "#8b4513",
      rosybrown: "#bc8f8f",
      orchid: "#da70d6",
      darkkhaki: "#bdb76b",
      darkgoldenrod: "#b8860b",
      darkcyan: "#008b8b",
      crimson: "#dc143c",
      cadetblue: "#5f9ea0",
      burlywood: "#deb887",
      blueviolet: "#8a2be2",
      aliceblue: "#f0f8ff",
      ghostwhite: "#f8f8ff",
      honeydew: "#f0fff0",
      ivory: "#fffff0",
      azure: "#f0ffff",
      snow: "#fffafa",
      black: "#000000",
      dimgray: "#696969",
      gray: "#808080",
      darkgray: "#a9a9a9",
      lightgray: "#d3d3d3",
      gainsboro: "#dcdcdc",
      whitesmoke: "#f5f5f5",
      // You can continue adding more colors as needed
    };

    return colors[colorName.toLowerCase()];
  }
});

//For the 'go to top' button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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

var isRandom = true;
// to turn on and off the overlay effect
document
  .getElementById("changeColorButton")
  .addEventListener("click", function () {
    isRandom = false;
    document.getElementById("overlay").style.display = "flex";
  });

document.getElementById("colorWheel").addEventListener("input", function () {
  document.getElementById("dynamicColorButton").style.backgroundColor =
    this.value;
});

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}

function randomize() {
  isRandom = true;
  closeOverlay();
}
