/*<nav>*/
(function () {
    const mainMenu = document.querySelectorAll("ul[data-main-menu]");
    const mainMenuA = document.querySelectorAll("ul[data-main-menu] > li > a");
    const subMenu = document.querySelectorAll("ul[data-sub-menu] > li:last-child > a");
    let i = null;

const maxHeightRest = function () {
    const dataSubMenu = document.querySelectorAll("ul[data-sub-menu] > li");

    for (i = 0; i < dataSubMenu.length; ++i) {
        dataSubMenu[i].style.maxHeight = null;
    }
}

const maxHeightValue = function (dataSubMenu) {
    for (i = 0; i < dataSubMenu.length; ++i) {
        dataSubMenu[i].style.maxHeight = `${dataSubMenu[i].scrollHeight}px`;
    }
}

for (i = 0; i < mainMenu.length; ++i) {
    mainMenu[i].addEventListener("mouseover", function (e) {
        e.stopPropagation();
        const dataSubMenuLi = e.target.querySelectorAll("ul[data-sub-menu] > li");

        if (dataSubMenuLi.length) {
            maxHeightRest();
            maxHeightValue(dataSubMenuLi);
        }
        return 0;
    }, false);

    mainMenuA[i].addEventListener("click", function (e) {
        e.preventDefault();
    }, false);

    mainMenuA[i].addEventListener("focus", function (e) {
        e.stopPropagation();
        const dataSubMenuLi = e.target.parentElement.querySelectorAll("ul[data-sub-menu] > li");

        if (dataSubMenuLi.length) {
            maxHeightRest();
            maxHeightValue(dataSubMenuLi);
        }
        return 0;
    }, false)
}

for (i = 0; i < subMenu.length; ++i) {
    subMenu[i].addEventListener("blur", function (e) {
        maxHeightRest();
    },true);
}

addEventListener("mouseover", function (e) {
    maxHeightRest();
}, false);


})();


/* </nav>*/
    
    




