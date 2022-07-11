// SWIPER
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
});

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.querySelector("#header");
    // Si le scroll dépasse 50vh, on ajoute la class "scroll-header"
    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

// SHOW CART

const cart = document.querySelector("#cart");
const cartShop = document.querySelector("#cart-shop");
const cartClose = document.querySelector("#cart-close");

if (cartShop) {
    cartShop.addEventListener("click", () => {
        console.log("hello");
        cart.classList.add("show-cart");
    });
}

if (cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove("show-cart");
    });
}

// SHOW LOGIN

const login = document.querySelector("#login");
const loginToggle = document.querySelector("#login-btn");
const loginClose = document.querySelector("#login-close");

if (loginToggle) {
    loginToggle.addEventListener("click", () => {
        login.classList.add("show-login");
    });
}

if (loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove("show-login");
    });
}

// SHOW MENU
const menu = document.querySelector("#nav-menu");
const menuShow = document.querySelector("#nav-toggle");
const menuClose = document.querySelector("#nav-close");

if (menuShow) {
    menuShow.addEventListener("click", () => {
        menu.classList.add("show-menu");
    });
}

if (menuClose) {
    menuClose.addEventListener("click", () => {
        menu.classList.remove("show-menu");
    });
}

// SHOW SCROLL UP
function scrollUp() {
    const scrollUp = document.querySelector("#scrollup");
    if (this.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}
window.addEventListener("scroll", scrollUp);
