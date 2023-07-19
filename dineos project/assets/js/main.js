// Navbar Hover Dropdown
// Close dropdown when clicking outside
// jquary javascript
// $(document).ready(function () {
//   $(".dropdown").hover(
//     function () {
//       $(this).addClass("show");
//       $(this).find(".dropdown-menu").addClass("show");
//     },
//     function () {
//       $(this).removeClass("show");
//       $(this).find(".dropdown-menu").removeClass("show");
//     }
//   );
// });

// // vanila Javascript
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdowns = document.getElementsByClassName("dropdown");

//   for (var i = 0; i < dropdowns.length; i++) {
//     dropdowns[i].addEventListener("mouseenter", function () {
//       this.classList.add("show");
//       var dropdownMenu = this.getElementsByClassName("dropdown-menu")[0];
//       if (dropdownMenu) {
//         dropdownMenu.classList.add("show");
//       }
//     });

//     dropdowns[i].addEventListener("mouseleave", function () {
//       this.classList.remove("show");
//       var dropdownMenu = this.getElementsByClassName("dropdown-menu")[0];
//       if (dropdownMenu) {
//         dropdownMenu.classList.remove("show");
//       }
//     });
//   }
// });
// male navbar go to top and comeback with different background
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("header");
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
// side bar navigation
var sidebar = document.getElementById("side-bar");
var closeBtn = document.getElementsByClassName("close-icon-menu")[0];
var sidebarBack = document.getElementById("sidebarBack");
var sidebarBackToggle = document.querySelector(".side-back.show");

function showSidebar() {
  sidebar.classList.add("show");
  sidebarBack.classList.add("show");
}

function removeShow() {
  sidebarBack.classList.remove("show");
  sidebar.classList.remove("show");
}

// Footer Gellary Bootstrap popup image
// let galleryItems = document.querySelectorAll(".gallery-item");
// let modalImage = document.getElementById("modalImage");

// galleryItems.forEach(function (item) {
//   item.addEventListener("click", function () {
//     let src = this.getAttribute("data-bs-src");
//     modalImage.setAttribute("src", src);
//   });
// });

// PROGRESS BACK TO TOP
var progressPath = document.querySelector(".progress-wrap path");
var pathLength = progressPath.getTotalLength();

progressPath.style.transition = progressPath.style.WebkitTransition = "none";
progressPath.style.strokeDasharray = pathLength + " " + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
  "stroke-dashoffset 10ms linear";

var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength) / height;
  progressPath.style.strokeDashoffset = progress;
};

updateProgress();

$(window).scroll(updateProgress);

var offset = 50;
var duration = 550;

jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery(".progress-wrap").addClass("active-progress");
  } else {
    jQuery(".progress-wrap").removeClass("active-progress");
  }
});

jQuery(".progress-wrap").on("click", function (event) {
  event.preventDefault();
  jQuery("html, body").animate({ scrollTop: 0 }, duration);
  return false;
});

// Testimonial Swiper skuder

let swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  parallax: true,
  speed: 1600,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-paginations",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
