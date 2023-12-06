var connect = document.getElementById("connectBtn");
var navbar = document.getElementById("myTopnav");

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  navbar.classList.remove("navbar-hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  connect.onclick = function () {
    navbar.classList.add("navbar-hidden");
    openNav();
  };
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navShrink() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// popup window
document.addEventListener('DOMContentLoaded', (event) => {
  const linkedinBtn = document.getElementById('linkedIn-btn');
  const githubBtn = document.getElementById('github-btn');
  const discordBtn = document.getElementById('discord-btn');

  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.popup-close-btn');
  const okBtn = document.querySelector('.ok-btn');

  linkedinBtn.onclick = function() {
    popup.style.display = "block";
    var linkedIn_url = "https://www.linkedin.com/in/ankit-modhera";
            window.open(linkedIn_url, '_blank');
  }

  githubBtn.onclick = function() {
    popup.style.display = "block";
            window.open("https://github.com/an-m1", '_blank');
  }
// discordapp.com/users/689113758068637722
discordBtn.onclick = function() {
  popup.style.display = "block";
          window.open("https://discordapp.com/users/689113758068637722", '_blank');
}

  closeBtn.onclick = function() {
    popup.style.display = "none";
  }

  okBtn.onclick = function() {
    popup.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
});
