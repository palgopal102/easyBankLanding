const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
}
