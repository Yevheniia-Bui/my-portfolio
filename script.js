document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const header = document.querySelector(".header");

    menuIcon.addEventListener("click", function () {
        if (mobileMenu.classList.contains("show")) {
            mobileMenu.classList.remove("show");
            mobileMenu.classList.add("hide");
            header.classList.remove("no-radius");
            setTimeout(() => {
                mobileMenu.style.display = "none";
                mobileMenu.classList.remove("hide");
            }, 400);
        } else {
            mobileMenu.style.display = "flex";
            setTimeout(() => {
                header.classList.add("no-radius");
                mobileMenu.classList.add("show");
            }, 10);
        }
    });
});

const slider = document.querySelector('.skills-slider');
const slides = document.querySelectorAll('.skill');
const leftArrow = document.querySelector('.slider-arrow.left');
const rightArrow = document.querySelector('.slider-arrow.right');

let currentIndex = 0;

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 40;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

leftArrow.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    updateSlider();
});

rightArrow.addEventListener('click', () => {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
});

window.addEventListener('resize', updateSlider);
window.addEventListener('load', updateSlider);
