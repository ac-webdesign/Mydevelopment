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