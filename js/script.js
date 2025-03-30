function toggleSearch() {
    const searchBar = document.querySelector(".search-bar");
    searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
}

function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    if (menu.classList.contains("show")) {
        menu.style.top = "-100%";
        setTimeout(() => menu.classList.remove("show"), 400);
    } else {
        menu.classList.add("show");
        menu.style.top = "50px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const arrowIcon = document.querySelector(".dropdown-toggle i");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
        arrowIcon.classList.toggle("rotate");
    });
});

function animateNumbers() {
    const numbers = document.querySelectorAll(".number");
    const duration = 2000;
    const startTime = performance.now();

    function updateNumbers(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        numbers.forEach(number => {
            const target = +number.getAttribute("data-value");
            number.innerText = Math.floor(progress * target);
        });

        if (progress < 1) {
            requestAnimationFrame(updateNumbers);
        } else {
            numbers.forEach(number => number.innerText = number.getAttribute("data-value"));
        }
    }

    requestAnimationFrame(updateNumbers);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector(".grid-container"));

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = 50;

        function updateCounter() {
            if (count < target) {
                count++;
                counter.textContent = count;
                setTimeout(updateCounter, speed);
            } else {
                counter.textContent = target;
            }
        }

        updateCounter();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Comparison table loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function getScrollAmount() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) return slider.offsetWidth * 0.9;
        if (screenWidth <= 1024) return slider.offsetWidth * 0.48;
        return slider.offsetWidth * 0.32;
    }

    prevBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const dots = document.querySelectorAll(".dot");
const thumbnails = document.querySelectorAll(".thumbnails img");

function updateGallery(index) {
    images.forEach((img, i) => img.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    thumbnails.forEach((thumb, i) => thumb.classList.toggle("active", i === index));
    currentIndex = index;
}

document.querySelector(".left-arrow").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery(currentIndex);
});

document.querySelector(".right-arrow").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateGallery(index));
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => updateGallery(index));
});