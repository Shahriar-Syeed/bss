const navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.pageXOffset > 40) {
    navbar.classList.add("top");
    console.log("sogol");
  } else {
    navbar.classList.remove("top");
  }
};
