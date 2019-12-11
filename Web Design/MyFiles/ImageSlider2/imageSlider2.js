let now = 0;

const reset = function () {
  let count = 0;
  const li = document.querySelectorAll("li[data-mySlides]");
  li.forEach(function() {
    li[count].style.left = (count * 100)+"%";
    ++count;
  });
}

const addClass = function() {
  let count = 0;
  const li = document.querySelectorAll("li[data-mySlides]");
  li.forEach(function() {
    li[count].classList.add("slideAnimation");
    ++count;
  });
}

const next = function () {
  let count = 0;
  let size = null;
  const ul = document.querySelector("ul[data-slides]");
  const li = document.querySelectorAll("li[data-mySlides]");

  li.forEach(function() {
    size = li[count].style.left.replace(/%$/g, '');
    li[count].style.left = (Number(size) - 100)+"%";
    ++count;
  });


  if (li[now].nextElementSibling) {
    ++now;
  } else {
    const firstChild = ul.removeChild(li[0]);
    firstChild.style.left = 100+"%";
    ul.appendChild(fristChild);
  }
}


reset();
addClass();
setInterval(next, 2000);