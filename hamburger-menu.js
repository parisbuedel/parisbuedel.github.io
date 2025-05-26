
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("hamburger-toggle");
  const nav = document.querySelector("header nav");

  burger.addEventListener("click", function() {
    nav.classList.toggle("active");
  });
});
