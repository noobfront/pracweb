// Add the following code in your JavaScript file
window.onscroll = function () {
  var menu = document.querySelector(".floating-menu");
  if (window.pageYOffset > 100) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
