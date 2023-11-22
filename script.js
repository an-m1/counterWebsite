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
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('dynamicColorButton');
    var navbar = document.getElementById('myTopnav');

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    button.onmouseover = function() {
      // navbar.style.display = 'none'; // Hide the navbar
      navbar.classList.add('navbar-hidden');
        // button.style.backgroundColor = getRandomColor();
    };

    button.onmouseleave = function() {
      // navbar.style.display = 'block'; // Show the navbar again
      navbar.classList.remove('navbar-hidden');
        button.style.backgroundColor = getRandomColor();
    };
});


