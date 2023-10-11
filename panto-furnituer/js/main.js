const navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
};
