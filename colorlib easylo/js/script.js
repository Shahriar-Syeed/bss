$(window).scroll(function () {
  var top = $(window).scrollTop();
  if (top >= 400) {
    $(".header-sticky").addClass("sticky-bar");
  } else if ($(".header-sticky").hasClass("sticky-bar")) {
    $(".header-sticky").removeClass("sticky-bar");
  }
});

// const navBar = document.getElementById("navbar");
// let scrolled = false;

// window.onscroll = function () {
//   if (window.pageYOffset > 100) {
//     navBar.classList.remove("top");
//     if (!scrolled) {
//       navBar.style.transform = "translateY(-70px)";
//     }
//     setTimeout(function () {
//       navbar.style.transform = "translateY(0)";
//       scrolled = true;
//     }, 200);
//   } else {
//     navbar.classList.add("top");
//     scrolled = false;
//   }
// };
// // Smooth Scrolling
// $("#navbar a").on("click", function (e) {
//   if (this.hash !== "") {
//     e.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top - 100,
//       },
//       800
//     );
//   }
// });
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 200) {
//     $("#h-a").addClass("sticky-bar");
//   } else {
//     $("#h-a").removeClass("sticky-bar");
//   }
// });
// $(document).readyState(function () {
//   $("select").niceSelect();
// });
// $("#amount").on("click", function () {
//   $(".bi").addClass("b");
//   $(this).removeClass("b");
// });

// const variableRotate = document.querySelector(".rot");
// const buttonDown = document.querySelector(".bi-chevron-down");

// buttonDown.addEventListener("click", function () {
//   variableRotate.classList.add("b");
// });

// nav blog dropdown

const cardd = document.querySelector(".cardd");
const dn = document.querySelector(".d-none");
const cardd2 = document.querySelector(".cardd2");
$(window).onResize = function () {
  if (window.innerWidth <= 992) cardd.classList.add("d-none");
  else cardd.classList.remove("d.none");
  if (window.innerWidth >= 992) cardd2.classList.add("d-none");
  else cardd2.classList.remove("d.none");
};

// nav diown icon add
// var amount = document.getElementById("amount");
// var bi = document.querySelector(".bi");
// const rotatDownup = document.querySelector("rotat-downup");
// var boxopen = document.getElementById("boxopen"); // you were missing this code
// amount.addEventListener("click", function () {
//   amount.style.animation = "rotate 180deg";
//   boxopen.style.webkitAnimation = "rotate 180deg";
// });
// .rot {
//   -ms-transform: rotate(180deg);
//   -webkit-transform: rotate(180deg);
//   transform: rotate(180deg);
// }
// div {
//   -webkit-transition: transform 1s ease-in-out;
//   transition: transform 1s ease-in-out;
//   width: 30px;
// }

// on click down up icon

// const amount = document.querySelector("#amount");
// const bi = document.querySelector(".bi");
// const rotatDownup= document.querySelector('rotat-downup');
// amount.addEventListener("click", () => {
//   bi.classList.add("rotat-downup");
// });
// amount.addEventListener("click", () => {
//   bi.classList.remove("rotat-downup");
// });

// Get the button
let mybutton = document.getElementById("btn-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
