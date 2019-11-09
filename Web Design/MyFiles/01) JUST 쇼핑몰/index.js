/*<nav>*/
(function () {
    const mainMenu = "ul[data-main-menu]";
    const mainMenuLi = `${mainMenu} > li`;
    const mainMenuQ = document.querySelectorAll(`${mainMenu}`);
    const mainMenuA = document.querySelectorAll(`${mainMenuLi} > a`);
    const subMenu = "ul[data-sub-menu]";
    const subMenuLi = `${subMenu} > li`;
    const subMenuLastA = document.querySelector(` ${mainMenu}:last-child li > ${subMenu} li:last-child > a`);
    let status = null;
    let i = null;

    const maxHeightRest = function () {
        const li = document.querySelectorAll(`${subMenu} > li`);

        for (i = 0; i < li.length; ++i) {
            li[i].style.maxHeight = null;
        }
    }

    const maxHeightValue = function (li) {
        for (i = 0; i < li.length; ++i) {
            li[i].style.maxHeight = `${li[i].scrollHeight}px`;
        }
    }

    const mainMenuHeight = function (e, type) {
        e.stopPropagation();

        switch (type) {
            case "mouseover":
                const mouseoverMenuLi = e.target.querySelectorAll(`${subMenuLi}`);
                if (mouseoverMenuLi.length) {
                    maxHeightRest();
                    maxHeightValue(mouseoverMenuLi);
                } else {
                    return 0;
                }
                break;
            case "focus":
                const focusMenuLi = e.target.parentElement.querySelectorAll(`${subMenuLi}`);
                if (focusMenuLi.length) {
                    maxHeightRest();
                    maxHeightValue(focusMenuLi);
                } else {
                    return 0;
                }
                break;
        }
    }

    for (i = 0; i < mainMenuQ.length; ++i) {
        mainMenuQ[i].addEventListener("mouseover", function (e) {
            e.stopPropagation();
            mainMenuHeight(e, e.type);
        }, false);

        mainMenuA[i].addEventListener("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
        }, false);

        mainMenuA[i].addEventListener("focus", function (e) {
            e.stopPropagation();
            mainMenuHeight(e, e.type);
        }, false)
    }

    subMenuLastA.addEventListener("blur", function (e) {
        e.stopPropagation();
        maxHeightRest();
    }, false);


    addEventListener("mouseover", function (e) {
        maxHeightRest();
    }, false);


})();


/* </nav>*/