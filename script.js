const burger = document.querySelector(".burger");
const nav = document.querySelector(".lien-nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});

document.querySelectorAll(".lien-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
  });
});

let caroussel = document.getElementById("caroussel-items");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const themeCheckbox = document.getElementById("theme-toggle");

let currentIndex = 0;
const maxSlides = 3;

const savedTheme = localStorage.getItem("darkTheme");
if (savedTheme === "true") {
  document.body.classList.add("dark-theme");
  themeCheckbox.checked = true;
}

const updateSlide = () => {
  caroussel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % maxSlides;
  updateSlide();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + maxSlides) % maxSlides;
  updateSlide();
};

btnNext.addEventListener("click", (e) => {
  nextSlide();
});

btnPrev.addEventListener("click", (e) => {
  prevSlide();
});

themeCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkTheme", "true");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkTheme", "false");
  }
});

setInterval(() => {
  nextSlide();
}, 4000);
