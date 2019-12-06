function Counter() {
    this.count = null;
}

Counter.prototype.reset = function () {
    this.count = 0;
}

Counter.prototype.increase = function () {
    this.count = ++(this.count);
}

Counter.prototype.decrease = function () {
    this.count = --(this.count);
}

Counter.prototype.now = function () {
    return this.count;
}

Counter.prototype.nullCheck = function() {
    if(this.count === null) return 1;
    else return 0;
}

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
    if(count.nullCheck()){
        count.reset();
    }
    
    if(count.now() === slideSpace.get("li").length-1){
        clearInterval(slideSpace.get("setInterval"));
        
    }else{
        _nextSlide();
        count.increase();
    }
}

const slideSpace = new Map();
const count = new Counter();
let i;

_setSlidesPostion();
slideSpace.set("setInterval", setInterval(_slides, 2000));