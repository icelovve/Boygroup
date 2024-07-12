//scroll nav bar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('nav-show');
        nav.classList.remove('nav-hide');
    } else {
        nav.classList.add('nav-hide');
        nav.classList.remove('nav-show');
    }
});

//slidshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex -= n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow-fade");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

