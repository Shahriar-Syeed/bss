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
////  STICKY CAROUSOL    /////
/////////////////////////////

const navBar = document.getElementById("navBar");
const topNavbar = document.getElementById("topNavbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 400) {
    navBar.classList.add("d-none");
    if (!scrolled) {
      topNavbar.style.transform = "translateY(-74px)";
      topNavbar.style.background = "rgba(0, 0, 0, 0.8)"; // Added this line
      topNavbar.classList.remove("bg-dark");
    }
    setTimeout(function () {
      topNavbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navBar.classList.remove("d-none");
    topNavbar.style.background = ""; // Reset the background color
    topNavbar.classList.add("bg-dark");
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

let mediaContainer = document.getElementById("mediaContainer");
let galleryItems = document.querySelectorAll(".gallery-item");

//  The var modalImage = document.getElementById('modalImage'); line
//  retrieves the DOM element with the ID modalImage. This element
//  represents the <img> tag inside the modal body, where the selected
//  image will be displayed.
// // The var images = document.querySelectorAll('.img-thumbnail');
// line selects all elements with the class img-thumbnail. These
// elements represent the images or thumbnails in your gallery.

galleryItems.forEach(function (item) {
  item.addEventListener("click", function () {
    let type = this.getAttribute("data-type");
    let src = this.getAttribute("src");
    mediaContainer.innerHTML = "";

    if (type === "image") {
      let image = document.createElement("img");
      image.setAttribute("src", src);
      image.classList.add("img-fluid");
      mediaContainer.appendChild(image);
    } else if (type === "video") {
      let video = document.createElement("video");
      video.setAttribute("src", src);
      video.setAttribute("controls", "");
      video.classList.add("img-fluid");
      mediaContainer.appendChild(video);
    }
  });
});
// The images.forEach(function(image) { ... })loop iterates over each
// image or thumbnail element in the images NodeList.
// Inside the loop, image.addEventListener('click', function() { ... })
//  attaches a click event listener to each image or thumbnail.
// When an image or thumbnail is clicked, the event listener's callback
//  function is executed. It performs the following steps:
// var src = this.getAttribute('src'); retrieves the value of the src
//  attribute of the clicked image or thumbnail.
// modalImage.setAttribute('src', src); sets the src attribute of
//  the modalImage element (the image element inside the modal) to the
//   value obtained from the clicked image or thumbnail. This
//   effectively updates the source of the image inside the modal,
//    displaying the selected image.

// $(document).ready(function () {
//   $("#wave-container").wavify({
//     height: 200, // Adjust the height of the wave
//     bones: 4, // Number of wave curves
//     amplitude: 100, // Adjust the intensity of the wave
//     color: "rgba(25, 90, 90 )", // Color of the wave
//     speed: 0.15, // Speed of the wave animation
//   });
// });
// $(document).ready(function () {
//   let wave = $("#wave-path");
//   let wavePath = Snap("#wave-path");
//   let waveSVG = Snap("#wave-svg");

//   wave.wavify({
//     height: 200,
//     bones: 4,
//     amplitude: 100,
//     color: "rgba(152, 33, 7, 1)",
//     speed: 0.15,
//   });

//   // Get the generated wave path data and set it in the SVG path
//   wavePath.attr("d", wave.wavify("generate", { height: 200 }));

//   // Set the SVG height to match the wave height
//   waveSVG.attr("height", wave.outerHeight());
// });
$("#wave").wavify({
  height: 10,
  bones: 10,
  amplitude: 35,
  color: "rgba(84, 110, 122, 0.45)",
  speed: 0.25,
});

/////////////////////////////
////  LOG IN PAGE    /////
/////////////////////////////

// let forgotEmail = document.getElementById("forgotEmailLink");
// let forgotPass = document.getElementById("forgotPasswordLink");
// let signLink = document.getElementById("signupLink");
// let backToLogin = document.getElementById("backToLoginLink");
// let backToLogin2 = document.getElementById("backToLoginLink2");

// forgotEmail.onclick = () => {
//   document.getElementById("loginForm").classList.add("hidden");
//   document.getElementById("recoverEmailForm").classList.remove("hidden");
// };

// forgotPass.onclick = () => {
//   document.getElementById("loginForm").classList.add("hidden");
//   document.getElementById("recoverPasswordForm").classList.remove("hidden");
// };

// signLink.onclick = () => {
//   document.getElementById("loginForm").classList.add("hidden");
//   document.getElementById("signupForm").classList.remove("hidden");
// };

// backToLogin.onclick = () => {
//   document.getElementById("recoverEmailForm").classList.add("hidden");
//   document.getElementById("loginForm").classList.remove("hidden");
// };

// backToLogin2.onclick = () => {
//   document.getElementById("recoverPasswordForm").classList.add("hidden");
//   document.getElementById("loginForm").classList.remove("hidden");
// };

// let backToLogin3 = document.getElementById("backToLoginLink3");
// backToLogin3.addEventListener("click", function (event) {
//   event.preventDefault();
//   document.getElementById("signupForm").classList.add("hidden");
//   document.getElementById("loginForm").classList.remove("hidden");
// });
// function submitSignupForm() {
//   // Access the form elements and perform form validation here
//   // You can add your validation logic and form submission code

//   alert("Signup form submitted successfully!");
// }
// document
//   .getElementById("forgotEmailLink")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("loginForm").classList.add("hidden");
//     document.getElementById("recoverEmailForm").classList.remove("hidden");
//   });

// document
//   .getElementById("forgotPasswordLink")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("loginForm").classList.add("hidden");
//     document.getElementById("recoverPasswordForm").classList.remove("hidden");
//   });

// document
//   .getElementById("signupLink")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("loginForm").classList.add("hidden");
//     document.getElementById("signupForm").classList.remove("hidden");
//   });

// document
//   .getElementById("backToLoginLink")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("signupForm").classList.add("hidden");
//     document.getElementById("loginForm").classList.remove("hidden");
//   });

// document
//   .getElementById("backToLoginLink2")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("recoverEmailForm").classList.add("hidden");
//     document.getElementById("loginForm").classList.remove("hidden");
//   });

// document
//   .getElementById("backToLoginLink3")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     document.getElementById("recoverPasswordForm").classList.add("hidden");
//     document.getElementById("loginForm").classList.remove("hidden");
//   });

function visibleSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

function visibleLoginHideSignup() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
function visibleLoginHideRecoverEmail() {
  document.getElementById("recoverEmailForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
function visibleLoginHideRecoverPassword() {
  document.getElementById("recoverPasswordForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}
function visibleRecoverEmailHideLogin() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("recoverEmailForm").classList.remove("hidden");
}
function visibleRecoverPasswordHideLogin() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("recoverPasswordForm").classList.remove("hidden");
}
