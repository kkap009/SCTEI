/*eslint-env es6*/ /*error  Parsing error: The keyword 'const' is reserved 해결*/
/*eslint-env browser*/ /*ERROR: 'document' is not defined [no-undef] 해결*/

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




