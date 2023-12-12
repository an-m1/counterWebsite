// document.addEventListener("DOMContentLoaded", function () {
//   // Get the checkbox inside the label with id 'darkmode'
//   var checkbox = document.querySelector('#darkmode input[type="checkbox"]');

//   checkbox.onclick = function () {
//     // Toggle background color based on checkbox state
//     if (checkbox.checked) {
//       // Dark mode color
//       //   document.body.style.backgroundImage = "radial-gradient(circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )";
//       document.body.style.backgroundImage =
//         "linear-gradient( 358.4deg,  rgba(249,151,119,1) -2.1%, rgba(98,58,162,1) 90% )";
//     } else {
//       // Light mode color
//       document.body.style.backgroundImage =
//         "linear-gradient(43deg, #4158d0 0%,  #c850c0 46%, #ffcc70 100%)";
//     }
//   };
// });

/* Similar concept as the code above, but the transition between light and dark modes looks choppy. Transitioning a background-image smoothly in CSS is more complex than transitioning colors, as CSS doesn't support transitions between gradients or images directly. */
document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector('#darkmode input[type="checkbox"]');
  var button = document.getElementById("rand-btn");

  // since .card is a class and not an id, we can do the same thing a little differently as follows.
  var cards = document.querySelectorAll(".card");

  // Check the saved state from local storage and update the checkbox and body class
  var darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    checkbox.checked = true;
    document.body.classList.add("dark-mode");
  }

  checkbox.addEventListener("change", function () {
    var isChecked = this.checked; // Capture the state of the checkbox

    if (isChecked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled"); // Save state to local storage
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", null); // Remove state from local storage
    }

    if (isChecked) {
      // Apply the gradient background when the toggle switch is checked
      button.style.backgroundImage =
        "linear-gradient(to right, #5f2c82 0%, #49a09d 51%, #5f2c82 100%)";
    } else {
      // Revert to the original background when the toggle switch is unchecked
      button.style.backgroundImage =
        "linear-gradient(to right, #ff512f 0%, #f09819 51%, #ff512f 100%)";
    }

    cards.forEach(function (card) {
      if (isChecked) {
        card.style.backgroundColor = "#8468B4"; //  color when checked
      } else {
        card.style.backgroundColor = "#dd95b3"; //  color when unchecked
      }
    });
  });
});

// document.getElementById('darkmode').addEventListener('change', function() {
//     var button = document.getElementById('rand-btn');

// });
