document.addEventListener("DOMContentLoaded", function () {
    // mobile menu
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

    // logic to scroll to "Cases" section
    const casesButton = document.getElementById("casesButton");
    const targetSection = document.getElementById("casesSection");

    casesButton.addEventListener("click", function () {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // skills slider
    const skillsSlider = document.querySelector('.skills-slider');
    const skillSlides = document.querySelectorAll('.skill');
    const leftSkillArrow = document.querySelector('.slider-arrow.left');
    const rightSkillArrow = document.querySelector('.slider-arrow.right');

    let skillsIndex = 0;

    function updateSkillsSlider() {
        const slideWidth = skillSlides[0].offsetWidth + 40; // 40px — margin
        skillsSlider.style.transform = `translateX(-${skillsIndex * slideWidth}px)`;
    }

    leftSkillArrow.addEventListener('click', () => {
        if (skillsIndex === 0) {
            skillsIndex = skillSlides.length - 1;
        } else {
            skillsIndex--;
        }
        updateSkillsSlider();
    });

    rightSkillArrow.addEventListener('click', () => {
        if (skillsIndex === skillSlides.length - 1) {
            skillsIndex = 0;
        } else {
            skillsIndex++;
        }
        updateSkillsSlider();
    });

    window.addEventListener('resize', updateSkillsSlider);
    window.addEventListener('load', updateSkillsSlider);

    // cases slider
    const casesSlider = document.querySelector('.cases-slider');
    const container = document.querySelector('.cases-slider-container');
    const items = document.querySelectorAll('.case-item');
    const arrowLeft = document.querySelector('.cases-arrow.left');
    const arrowRight = document.querySelector('.cases-arrow.right');

    let currentOffset = 0;

    function getItemOffsets() {
        let offsets = [];
        let acc = 0;
        items.forEach(item => {
            offsets.push({ left: acc, width: item.offsetWidth });
            acc += item.offsetWidth + 40; // 40px — margin between items
        });
        return offsets;
    }

    function scrollRight() {
        const containerWidth = container.offsetWidth;
        const offsets = getItemOffsets();

        for (let i = 0; i < offsets.length; i++) {
            const itemRightEdge = offsets[i].left + offsets[i].width;

            if (itemRightEdge > currentOffset + containerWidth) {
                currentOffset = itemRightEdge - containerWidth;
                casesSlider.style.transform = `translateX(-${currentOffset}px)`;
                return;
            }
        }

        currentOffset = 0;
        casesSlider.style.transform = `translateX(0)`;
    }

    function scrollLeft() {
        const offsets = getItemOffsets();

        for (let i = offsets.length - 1; i >= 0; i--) {
            const itemLeftEdge = offsets[i].left;

            if (itemLeftEdge < currentOffset) {
                currentOffset = itemLeftEdge;
                casesSlider.style.transform = `translateX(-${currentOffset}px)`;
                return;
            }
        }

        const totalWidth = offsets[offsets.length - 1].left + offsets[offsets.length - 1].width;
        const containerWidth = container.offsetWidth;
        currentOffset = Math.max(0, totalWidth - containerWidth);
        casesSlider.style.transform = `translateX(-${currentOffset}px)`;
    }

    arrowRight.addEventListener('click', scrollRight);
    arrowLeft.addEventListener('click', scrollLeft);

    window.addEventListener('resize', () => {
        scrollRight();
    });

    // logic to expand additional image info
    document.querySelectorAll('.expandable').forEach(box => {
        box.addEventListener('mouseenter', () => {
            const fullHeight = box.scrollHeight;
            box.style.height = fullHeight + 'px';
            box.querySelector('.extra-text').style.opacity = 1;
        });

        box.addEventListener('mouseleave', () => {
            if (!box.classList.contains('open')) {
                box.style.height = '80px';
                box.querySelector('.extra-text').style.opacity = 0;
            }
        });

        box.addEventListener('click', () => {
            box.classList.toggle('open');
            if (box.classList.contains('open')) {
                const fullHeight = box.scrollHeight;
                box.style.height = fullHeight + 'px';
                box.querySelector('.extra-text').style.opacity = 1;
            } else {
                box.style.height = '80px';
                box.querySelector('.extra-text').style.opacity = 0;
            }
        });
    });
});
