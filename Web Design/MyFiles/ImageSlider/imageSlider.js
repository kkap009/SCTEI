function sliderPostion() {
    const parent = document.querySelector("ul[data-image-slider]");
    const child = parent.querySelectorAll("li");
    let i;
    
    if (child[0].className==="") {
        for (i = 0; i < parent.children.length; ++i) {
            /*IE11은 탬플릿 리터럴을 지원하지 않는다.*/
            child[i].style.left = i * 100 + "%";
        }
        return 1;
    }
    return 0;
}

function slider() {
    const parent = document.querySelector("ul[data-image-slider]");
    const child = parent.querySelectorAll("li");
    let i;

    for (i = 0; i < parent.children.length; ++i) {
        /*IE11은 탬플릿 리터럴을 지원하지 않는다.*/
        if(child[i].className === ""){
            child[i].classList.add("slider");
        }
    }
}

const sliderMain = function () {
    let resetResult = sliderPostion();
    if(!resetResult){
        slider();
    }
    
    return 0;
}

sliderMain();
setTimeout(sliderMain, 2000);