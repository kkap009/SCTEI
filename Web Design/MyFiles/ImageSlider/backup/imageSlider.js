const sliderQueryMap = new Map();

function query(sentence , keyValue) {
    const localSentence = sentence || null;
    let result, count;
    
    if(!localSentence){
        return null;
    }
    
    while(count === 4){
        if(!Boolean(count)){
            count = 0;
        }
        
        switch(count){
            case 0 :
                result = document.getElementById(sentence);
                count++;
                break;
            case 1 :
                result = document.getElementsByClassName(sentence);
                count++;
                break;
            case 2 :
                result = document.getElementsByTagName(sentence);
                count++;
                break;
            case 3 :
                result = document.querySelector(sentence);
                count++;
                break;
            case 4 :
                result = document.querySelectorAll(sentence);
                count++;
                break;
            default:
                count = 0;
                break;
        }
    }
    
    return keyValue;
}

function sliderPostion() {
    const parent = document.querySelector("ul[data-image-slider]");
    const child = parent.querySelectorAll("li");
    let i;

    if (!child[0].className) {
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
        if (child[i].className === "") {
            child[i].classList.add("slider");
        }
    }
}

const sliderMain = function () {
    sliderPostion();

    return 0;
}

sliderMain();
setTimeout(sliderMain, 2000);
query("a","b")



