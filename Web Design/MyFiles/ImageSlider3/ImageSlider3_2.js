/*eslint-env es6*/
/*eslint-env browser*/

const carouselSlide2 = document.querySelector(".imageContainer2");
const carouselImage2 = carouselSlide2.getElementsByTagName("li");
const nextBtn2 = document.querySelector("#nextBtn2");
const prevBtn2 = document.querySelector("#prevBtn2");

let counter2 = 0;

next = function (e) {
    e.stopImmediatePropagation();
    const size2 = carouselImage2[0].clientWidth;
    ++counter2;
    if (counter2 > carouselImage2.length - 1) {
        counter2 = 0;
    }
    carouselSlide2.style.left = (-size2 * counter2) + "px";
    event = e;
};

prev = function (e) {
    e.stopImmediatePropagation();
    const size2 = carouselImage2[0].clientWidth;
    --counter2;
    if (counter2 < 0) {
        counter2 = carouselImage2.length - 1;
    }
    carouselSlide2.style.left = (-size2 * counter2) + "px";
    event = e;
};

carouselSlide2.addEventListener("transitionend", function () {
    carouselSlide2.classList.remove("transitionImg2");
    const cloneCarouselSlide = document.querySelector(".imageContainer2");
    const cloneCarouselImage = cloneCarouselSlide.getElementsByTagName("li");

    switch (event.type) {
        case "next":
            break;
        case "prev":
            break;
        default:
            break;
    }
    carouselSlide2.classList.add("transitionImg2");
});

carouselSlide2.classList.add("transitionImg2");
nextBtn2.addEventListener("click", next);
prevBtn2.addEventListener("click", prev);

for (let i = 0; i < carouselImage2.length; ++i) {
    carouselImage2[i].setAttribute("data-value", i + 1);
}