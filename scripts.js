// JavaScript for Page Navigation
function showPage(pageId) {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    document.getElementById(pageId).classList.add('active');
}

// JavaScript for Slideshow
let slideIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    slideIndex = index;
}

function autoSlide() {
    const slides = document.getElementsByClassName("slide");
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function startAutoSlide() {
    setInterval(autoSlide, 3000); // Auto-slide every 3 seconds
}

// Start auto-sliding on page load
window.onload = function() {
    startAutoSlide();
};
