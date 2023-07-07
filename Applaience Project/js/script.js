const swiper = new Swiper(".swiper1", {
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
});
const swiper2 = new Swiper(".swiper2", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".next-btn2",
    prevEl: ".prev-btn2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    554: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
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
// dollar to taka
const priceTogglerContainer = document.querySelector(
  ".price-toggler-container"
);
let priceToggler = document.querySelector(".price-toggler");
let price = document.querySelectorAll(".price");
let currency = document.querySelectorAll(".currency");

priceTogglerContainer.onclick = () => {
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
////////////////////////////////////////////////
//                     time countdown    ///////
////////////////////////////////////////////////
const countdownContainer = document.querySelector(".countdown-container");
const close1 = document.querySelector(".close-1");
const close2 = document.querySelector(".close-2");
const closeIcon1 = document.querySelector(".close-icon-1");
const closeIcon2 = document.querySelector(".close-icon-2");

const setCookies = (name, value, duration) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + duration * 60 * 60 * 1000);
  document.cookie = `${name} = ${value};expires=${expires.toUTCString()};path=/`;
};
closeIcon1.onclick = () => {
  close1.style.display = "none";
  setCookies("discountClosed", "true", 24);
};
closeIcon2.onclick = () => {
  close2.style.display = "none";
  setCookies("discountClosed", "true", 24);
};

// const days = document.querySelector(".countdown-timer .days");
// const hours = document.querySelector(".countdown-timer .hours");
// const minutes = document.querySelector(".countdown-timer .minutes");
// const seconds = document.querySelector(".countdown-timer .seconds");
// const countdownDate = new Date("2023-10-06T16:57:00").getTime();

// let t = setInterval(() => {
//   let now = new Date().getTime();
//   let distance = countdownDate - now;
//   let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
//   let hoursValue = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   ).toString();
//   let minutesValue = Math.floor(
//     (distance % (1000 * 60 * 60)) / (1000 * 60)
//   ).toString();
//   let secondsValue = Math.floor((distance % (1000 * 60)) / 1000).toString();
//   days.innerHTML = daysValue;
//   hours.innerHTML = hoursValue;
//   minutes.innerHTML = minutesValue;
//   seconds.innerHTML = secondsValue;

// if (distance < 0) {
//   clearInterval(t);
//   countdownContainer.style.display = "none";
// }
// }, 1000);

function countdown() {
  const countdownElements = document.getElementsByClassName("countdown-timer");

  for (let i = 0; i < countdownElements.length; i++) {
    const countdownDate = new Date(
      countdownElements[i].getAttribute("data-date")
    ).getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance <= 0) {
      countdownContainer.style.display = "none";
    } else {
      countdownElements[i].innerHTML = `<div class="group">
      <div class="value days">${days.toString().padStart(2, "0")}</div>
        <div class="unit-s">Days</div>
        </div>
                  <div class="group">
                    <div class="value hours">${minutes
                      .toString()
                      .padStart(2, "0")}</div>
                    <div class="unit-s">Hrs</div>
                  </div>
                  <div class="group">
                    <div class="value minutes">${minutes
                      .toString()
                      .padStart(2, "0")}</div>
                    <div class="unit-s">Min</div>
                  </div>
                  <div class="group">
                    <div class="value seconds">${seconds
                      .toString()
                      .padStart(2, "0")}</div>
                    <div class="unit-s">Sec</div>
                  </div>`;
      if (distance < 0) {
        clearInterval(t);
        countdownContainer.style.display = "none";
      }
    }
  }
}

// Update the countdown every second
setInterval(countdown, 1000);
