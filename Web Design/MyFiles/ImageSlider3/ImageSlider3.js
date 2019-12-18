/*eslint-env es6*/

const carouselSlide = document.querySelector(".imageContainer");
const carouselImages = carouselSlide.getElementsByTagName("li");

// Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.classList.add("transitionImg");

nextBtn.addEventListener('click',function(){
    ++counter;
    carouselSlide.style.transform = "translateX("+(-size * counter) + "px)";
});

prevBtn.addEventListener('click',function(){
    --counter;
    carouselSlide.style.transform = "translateX("+(-size * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", function(){
   
});


