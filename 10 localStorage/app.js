const count = document.querySelector(".count")
const mouse = document.querySelector(".fa-solid")


count.innerHTML = localStorage.clickcount || 0
const clickCounter = () => {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    count.innerHTML = localStorage.clickcount;
  }

  mouse.addEventListener("click", clickCounter)