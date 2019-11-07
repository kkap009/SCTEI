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

for(i=0; i<mainMenu.length; ++i){
    mainMenu[i].addEventListener("mouseover",function(e)
    {   
        e.stopPropagation();
        
        const target = e.target;
        const targetName = e.target.tagName.toLowerCase();
        const targetParentName = target.parentElement.tagName.toLowerCase();
        let children , targetChildName , ulCheck , liCheck;
        
        /*예외 처리*/
        try{
            targetChildName = target.children[0].tagName.toLowerCase();
            ulCheck = targetName.match("ul") && targetParentName.match("nav");
            liCheck = targetName.match("li") && targetChildName.match("ul");
        } catch (e) {
            targetChildName = null;
            ulCheck = null;
            liCheck = null;
        }  
        
        if(ulCheck){           
            children = target.children[0].children[0].children;    
            maxHeightRest();
        }else if(liCheck){
            children = target.children[0].children;
            maxHeightRest();
        }else {
            return 0;
        }
        
        for(i=0; i<children.length; ++i){
            children[i].style.maxHeight = `${children[i].scrollHeight}px`;
        }    
        
    },false);
}

html[0].addEventListener("mouseover",function(e){
        maxHeightRest();
},false);
})();
    
    




