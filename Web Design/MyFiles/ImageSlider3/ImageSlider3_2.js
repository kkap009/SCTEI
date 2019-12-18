/*eslint-env es6*/

const carouselSlide2 = document.querySelector(".imageContainer2");
const carouselImage2 = carouselSlide2.getElementsByTagName("li");

const nextBtn2 = document.querySelector("#nextBtn2");
const prevBtn2 = document.querySelector("#prevBtn2");

let counter2 = 0;
const size2 = carouselImage2[0].clientWidth;
carouselSlide2.classList.add("transitionImg2");

nextBtn2.addEventListener("click", function () {
    ++counter2;
    carouselSlide2.style.left = (-size * counter2) + "px";
});

prevBtn2.addEventListener("click", function () {
    --counter2;
    carouselSlide2.style.left = (-size * counter2) + "px";
});

carouselSlide2.addEventListener("transitionend", function () {
    let counter = null;
    const array = new Array(carouselImage2.length -1);
    
    if(counter2 === carouselImage2.length-1) { /*끝 이미지*/
        carouselSlide2.classList.remove("transitionImg2");
        counter = 0;
        
        for(;counter < carouselImage2.length-1; ++counter){
            array[counter] = carouselSlide2.removeChild(carouselImage2[counter]);
        }
        
    }
    else if(counter2 === 0) { /*첫 이미지*/
        carouselSlide2.classList.remove("transitionImg2");
        
        counter = carouselImage2.length-1;
        
    }
});


