(function (){
    const mainMenu = document.querySelectorAll("ul[data-main-menu]");
    const html = document.getElementsByTagName("html");
    let i = null;

const maxHeightRest = function(){
    const childs = document.querySelectorAll("ul[data-sub-menu] > li");
            
    for(i=0; i<childs.length; ++i){
        childs[i].style.maxHeight = null;
    }  
}

const maxHeightValue = function(dataSubMenuLi){
    for(i=0; i<dataSubMenuLi.length; ++i){
            dataSubMenuLi[i].style.maxHeight = `${dataSubMenuLi[i].scrollHeight}px`;
        }   
}

for(i=0; i<mainMenu.length; ++i){
    mainMenu[i].addEventListener("mouseover",function(e)
    {   
        e.stopPropagation();
        const target = e.target;
        const targetName = e.target.tagName.toLowerCase();
        const targetParentName = target.parentElement.tagName.toLowerCase();
        let children , targetChildName , dataMainMenu , dataMainMenuLi , dataSubMenuLi;
        
        try {
            targetChildName = target.children[0].tagName.toLowerCase();    
        }catch(e){
            targetChildName = null;
        }
        
        dataMainMenu = targetName.match("ul") && targetParentName.match("nav");
        dataMainMenuLi = targetName.match("li") && targetChildName.match("ul");
        
        if(dataMainMenu === undefined){
            dataMainMenu = null;    
        }else if(dataMainMenuLi === undefined){
            dataMainMenuLi = null;
        }
        
        if(dataMainMenu){  
            dataSubMenuLi = target.children[0].children[0].children;
        }else if(dataMainMenuLi){
            dataSubMenuLi = target.children[0].children;
        }else {
            return 0;
        }
        
        maxHeightRest();
        maxHeightValue(dataSubMenuLi); 
    },true);
}

html[0].addEventListener("mouseover",function(e){
        maxHeightRest();
},false);
})();
    
    




