const slideSpace = new Map();
let i;

function _setSlidesPostion() {
    slideSpace.set("li", document.querySelectorAll("li[data-mySlides]"));

    for (i = 0; i < slideSpace.get("li").length; ++i) {
        slideSpace.get("li")[i].style.left = String(i * 100) + "%";
    }

    for (i = 0; i < slideSpace.get("li").length; ++i) {
        slideSpace.get("li")[i].classList.add("slideAnimation");
    }
}

function _slides() {
    let count = 0;
    function plus(){
        ++count;
    }
    plus();
    
    console.log(count);
    
    for (i = 0; i < slideSpace.get("li").length; ++i) {
        let size = slideSpace.get("li")[i].style.left.replace(/%$/g,'');
        slideSpace.get("li")[i].style.left = (Number(size) -100) + "%";
    }
    
}

_setSlidesPostion();
slideSpace.set("setInterval",setInterval(_slides,2000));