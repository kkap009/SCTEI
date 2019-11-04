const mainMenu = document.querySelectorAll("ul[data-main-menu]");
let i;

for(i=0; i<mainMenu.length; ++i){
    mainMenu[i].addEventListener("mouseover",function(e)
    {
        if(e.target.tagName === this.tagName)
        {
            e.stopPropagation();
            this.classList.add("on");
            
        }
    });
}

for(i=0; i<mainMenu.length; ++i){
    mainMenu[i].addEventListener("mouseout",function(e)
    {
      for(i=0; i<mainMenu.length; ++i){
          console.log(mainMenu[i].classList.remove("on"));
          console.log(mainMenu[i])
      }
    });
}