// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
});

function moveSlide(step) {
    currentSlide += step;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    document.querySelector('.slides').style.transform = `translateX(${-100 * currentSlide}%)`;
}
