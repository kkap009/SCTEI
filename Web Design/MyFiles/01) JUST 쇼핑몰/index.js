/*<nav>*/
(function () {
    const navMenu = "nav[data-header-navigation]";
    const mainMenu = "ul[data-main-menu]";
    const subMenu = "ul[data-sub-menu]";
    const mainMenuLi = `${mainMenu} > li`;
    const subMenuLi = `${subMenu} > li`;
    const navMenuQ = document.querySelectorAll(`${navMenu}`);
    const mainMenuQ = document.querySelectorAll(`${mainMenu}`);
    const mainMenuQ_A = document.querySelectorAll(`${mainMenuLi} > a`);
    const subMenuLi_A = document.querySelectorAll(`${subMenuLi} > a`);
    const subMenuLi_LastEl = document.querySelectorAll(`${subMenuLi}:last-child > a`);
    const className = "sub-Menu-Active";
    let that = null;
    let i = null;

    const maxHeightRest = function () {
        const li = document.querySelectorAll(`${subMenu} > li`);

        for (i = 0; i < li.length; ++i) {
            li[i].style.maxHeight = null;
            li[i].classList.remove(`${className}`);
        }
    }

    const maxHeightValue = function (li) {
        for (i = 0; i < li.length; ++i) {
            li[i].style.maxHeight = `${li[i].scrollHeight}px`;
        }
    }

    const mainMenuHeight = function (e, type) {
        if (e.target.tagName.toLowerCase().match("nav")) {
            return 0;
        }
        
        switch (type) {
            case "mouseover":
                const mouseoverMenuLi = e.target.querySelectorAll(`${subMenuLi}`);
                if (mouseoverMenuLi.length) {
                    maxHeightRest();
                    maxHeightValue(mouseoverMenuLi);
                }
                break;
            case "focus":
                const focusMenuLi = e.target.parentElement.querySelectorAll(`${subMenuLi}`);
                if (focusMenuLi.length) {
                    maxHeightRest();
                    maxHeightValue(focusMenuLi);
                }
                break;
        }

        return 0;
    }

    navMenuQ[0].addEventListener("mouseover", function (e) {
        e.stopPropagation();
        mainMenuHeight(e, e.type);
    }, true);

    navMenuQ[0].addEventListener("click", function (e) {
        e.stopPropagation();
        const mainMenuAttr = e.target.parentElement.parentElement.attributes[0].nodeName;

        if (mainMenuAttr.match("data-main-menu")) {
            e.preventDefault();
        }
        return 0;
    }, false);

    window.addEventListener("mouseover", function (e) {
        maxHeightRest();
    }, false);

    for (i = 0; i < mainMenuQ_A.length; ++i) {
        mainMenuQ_A[i].addEventListener("focus", function (e) {
            e.stopPropagation();

            if (e.target.isEqualNode(this)) {
                mainMenuHeight(e, e.type);
                
                const subMenuLi_active = e.target.parentElement.querySelectorAll(`${subMenuLi}`);
                
                for(i=0; i<subMenuLi_active.length; ++i){
                    subMenuLi_active[i].classList.add(`${className}`);
                }
            }
        }, false);
        
        subMenuLi_LastEl[i].addEventListener("blur", function (e) {
            maxHeightRest();
        });
    }
})();
/* </nav>*/

/*figure 이미지 슬라이더*/
(function () {
    let i = 0;

    const slider = function () {
        const sliderImage = document.querySelectorAll("ul[data-slider-image] > li");
        
        
    }

    slider();
})();
/*/figure 이미지 슬라이더*/












































