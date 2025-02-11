// BURGER MENU 

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav'); 
    const navItems = document.querySelectorAll('.nav-item');
    const navFooter = document.querySelector('.nav-footer');
    const header = document.querySelector("header");


    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active'); 
        burgerMenu.classList.toggle('open'); 
        header.classList.toggle("active"); // Expands the header
        burgerMenu.textContent = burgerMenu.classList.contains('open') ? '✖' : '☰'; // Unicode Fix

        if (navFooter) {
            navFooter.classList.toggle('active');
        }

        document.body.style.overflow = burgerMenu.classList.contains('open') ? 'hidden' : 'auto';
    });

    // Close the menu when clicking anywhere outside the nav
    document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) { 
        nav.classList.remove('active');
        header.classList.remove("active"); // Shrinks the header back
        burgerMenu.classList.remove('open');
        burgerMenu.textContent = '☰'; // Reset icon
        document.body.style.overflow = 'auto';
    }
    });

})

// HERO CAROUSEL PHOTOS

const images = [
    'images/3.jpg',
    'images/building.png',
    'images/A2_living_room.jpg',
    'images/A2_swimming_pool.jpg',
    'images/A1_living_room.jpg'
];
let currentIndex = 0;
const hero = document.getElementById('hero');
const thumbs = document.querySelectorAll('[id^=thumb]');

function updateBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    thumbs.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

function setImage(index) {
    currentIndex = index;
    updateBackground();
}

thumbs.forEach((thumb, index) => {
    thumb.src = images[index];
});

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateBackground();
// }, 10000);

updateBackground();




document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    images.forEach((img) => {
        img.addEventListener("click", function () {
            const fullImage = document.createElement("img");
            fullImage.src = img.src;
            lightbox.innerHTML = ""; // Clear previous image
            lightbox.appendChild(fullImage);
            lightbox.style.display = "flex";
        });
    });

    // Close lightbox on click or ESC key
    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
});
