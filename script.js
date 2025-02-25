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

if (window.matchMedia("(max-width: 768px)").matches) {
    const mobileImages = [
        'images/first_mobile_image.jpg',
        'images/mobile_bathroom.jpg',
        'images/mobile_building.jpg',
        'images/mobile_bathroom1.jpg',
        'images/mobile_bathroom2.jpg'
    ];
    images.unshift(...mobileImages); // Add mobile images at the beginning
}

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
    if (index < images.length) {
        thumb.src = images[index]; 
    }
});

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateBackground();
// }, 10000);

updateBackground();


