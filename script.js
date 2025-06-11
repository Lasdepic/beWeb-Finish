let caroussel = document.getElementById("caroussel-items");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const themeCheckbox = document.getElementById("theme-toggle");

themeCheckbox.addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
});

let currentIndex = 0;
const maxSlides = 3;

const updateSlide = () => {
    caroussel.style.transform = `translateX(-${currentIndex * 33.33}%)`
}

btnNext.addEventListener("click", (e) => {
    currentIndex = (currentIndex + 1) % maxSlides;
    updateSlide();
})

btnPrev.addEventListener("click", (e) => {
    currentIndex = (currentIndex - 1 + maxSlides) % maxSlides;
    updateSlide();
})

