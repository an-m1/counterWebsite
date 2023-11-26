  // for colour search with autocomplete in the change colour overlay
document.addEventListener("DOMContentLoaded", function () {
    const colorSearchInput = document.getElementById("colorSearch");
    const colorDropdown = document.getElementById("colorDropdown");
    const changeColorButton = document.getElementById("dynamicColorButton");
  
    colorSearchInput.addEventListener("input", function () {
      const inputValue = this.value.toLowerCase();
      const colors = Object.keys(getColorData());
  
      // Clear previous dropdown items
      colorDropdown.innerHTML = "";
  
      if (inputValue.length === 0) {
        colorDropdown.style.display = "none";
        return;
      }
  
      const matchingColors = colors.filter((color) =>
        color.includes(inputValue)
      );
  
      if (matchingColors.length > 0) {
        matchingColors.forEach((color) => {
          const colorDiv = document.createElement("div");
          colorDiv.textContent = color;
          colorDiv.addEventListener("click", () => {
            colorSearchInput.value = color;
            colorDropdown.style.display = "none";
            updateButtonColor(color);
          });
          colorDropdown.appendChild(colorDiv);
        });
        colorDropdown.style.display = "block";
      } else {
        colorDropdown.style.display = "none";
      }
    });
  
    function getColorData() {
      // Define your color data here as an object with color names and values
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
      return colors;
    }
  
    function updateButtonColor(colorName) {
      const colorValue = getColorValue(colorName);
      if (colorValue) {
        // Update the button color and text color
        changeColorButton.style.backgroundColor = colorValue;
        changeColorButton.style.color =
          getBrightness(colorValue) > 186 ? "black" : "white";
      }
    }
  
    function getColorValue(colorName) {
      const colors = getColorData();
      return colors[colorName.toLowerCase()];
    }
  });
  