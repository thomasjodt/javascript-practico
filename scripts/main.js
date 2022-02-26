const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".list-container");
burgerMenu.addEventListener("click",() => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
}))