const slideTime = 3000;
const imageDelayTime = (slideTime/100)*90;
const className = "slideAnimation";
const dotClassName = "active";
const setTime = function(fun,time){
  return setTimeout(fun,time);
};
const setInter = function(fun,time){
  return setInterval(fun,time);
}

const dot = (function(){
  let privateCount = 0;
  function changeBy(val){
    privateCount += val;
  }
  function reset(val){
    privateCount = val;
  }
  return {
    valueReset : function(val){
      reset(val);
    },
    increment : function(){
      changeBy(1);
    },
    decrement : function(){
      changeBy(-1);
    },
    value : function(){
      return privateCount;
    }
  }
})();

const reset = function () {
  let length = null;
  const li = document.querySelectorAll("li[data-mySlides]");

  for(length=0; length < li.length; ++length){
    li[length].style.left = (length * 100)+"%";
  }
}

const addClass = function() {
  let length = null;
  const li = document.querySelectorAll("li[data-mySlides]");
  const button = document.querySelector("div[data-dots-container]");

  for(length=0; length < li.length; ++length){
    li[length].classList.add(className);
  }

  button.firstElementChild.classList.add(dotClassName);
}

const next = function () {
  let length = null;
  let size = null;
  const li = document.querySelectorAll("li[data-mySlides]");

  dotAtive();

  for(length=0; length < li.length; ++length){
    size = li[length].style.left.replace(/%$/g,'');
    li[length].style.left = (Number(size) - 100)+"%";
  }

  setTime(imageDelay,imageDelayTime);
}

function imageDelay(){
  const ul = document.querySelector("ul[data-slides]");
  const li = document.querySelectorAll("li[data-mySlides]");
  const firstChild = ul.removeChild(ul.firstElementChild);
  firstChild.style.left = (li.length-1) * 100 + "%";
  ul.appendChild(firstChild);
}

function dotAtive(str){
  const dots = document.querySelectorAll("button[data-dot]");
  let length = null;

  for(length=0; length < dots.length; ++length){
    dots[length].classList.remove(dotClassName);
  }

  dots[dot.value()].classList.add(dotClassName);
}

reset();
addClass();
setInter(next,slideTime);