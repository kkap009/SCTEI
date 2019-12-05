const slideSpace = new Map();
let i;

var _counter = (function () {
    let counter = -1;
    
    return function (status) {
        if(status.match("increase")){
            return ++counter;
        }else if(status.match("decrease")){
            return --counter;
        }else{
            return counter = -1;
        }
    }
}());

function _setSlidesPostion() {
    slideSpace.set("li", document.querySelectorAll("li[data-mySlides]"));
    slideSpace.set("ul", document.querySelector("ul[data-slides]"));

    for (i = 0; i < slideSpace.get("li").length; ++i) {
        slideSpace.get("li")[i].style.left = String(i * 100) + "%";
    }

    for (i = 0; i < slideSpace.get("li").length; ++i) {
        slideSpace.get("li")[i].classList.add("slideAnimation");
    }
}

function _nextSlide() {
    for (i = 0; i < slideSpace.get("li").length; ++i) {
        let size = slideSpace.get("li")[i].style.left.replace(/%$/g, '');
        slideSpace.get("li")[i].style.left = (Number(size) - 100) + "%";
    }
}

function _slides() {
    const count = _counter("increase");
    console.log(count);

    if (count >= slideSpace.get("li").length - 1 || count < 0) {
        clearInterval(slideSpace.get("setInterval"));
        console.log(slideSpace.get("li")[count]);
        for(i=0; i < count; ++i){
            slideSpace.get("ul").appendChild(slideSpace.get("li")[i]);
        }
        console.log(slideSpace.get("ul"));
    } else {
        console.log(slideSpace.get("li")[count]);
        _nextSlide();
    }
}

_setSlidesPostion();
slideSpace.set("setInterval", setInterval(_slides, 2000));