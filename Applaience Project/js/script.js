const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  grabCursor: true,

  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/////////////////////////////
////  SLICK CAROUSOL    /////
/////////////////////////////

const navBar = document.getElementById("navBar");
const topNavbar = document.getElementById("topNavbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navBar.classList.add("d-none");
    if (!scrolled) {
      topNavbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      topNavbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navBar.classList.remove("d-none");
    scrolled = false;
  }
};

let priceToggler = document.querySelector(".price-toggler");
let price = document.querySelectorAll(".price");
let currency = document.querySelectorAll(".currency");

priceToggler.onclick = () => {
  priceToggler.classList.toggle("active");
  if (priceToggler.classList.contains("active")) {
    for (let i = 0; i < currency.length; i++) {
      currency[i].innerText = "৳";
    }
    for (let k = 0; k < price.length; k++) {
      price[k].innerText = price[k].innerText * 108.44;
    }
  } else {
    for (let i = 0; i < currency.length; i++) {
      currency[i].innerText = "$";
    }
    for (let k = 0; k < price.length; k++) {
      price[k].innerText = price[k].innerText / 108.44;
    }
  }
};
