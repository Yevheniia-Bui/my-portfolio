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
