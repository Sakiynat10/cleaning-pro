// Add active class to the current button 
const header = document.getElementById("activeLinks");
const btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// Add toggle-navbar
const navToggle = document.querySelector(".nav-toggle")
const toggleBtn = document.querySelector(".toggle-btn")

toggleBtn.addEventListener("click", function () {
    navToggle.classList.toggle("show-toggle");
    toggleBtn.classList.toggle("change-menu-img")
});


//Add carousel
$(document).ready(function () {
    $("#team-carousel").owlCarousel({
        margin: 20,
        loop: true,
        nav:true,
        items: 4,
        navText: ['<img src="../images/left.svg"/>', '<img src="../images/right.svg">'],
        autoplay: true,
        dots:true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        }
    });
});

