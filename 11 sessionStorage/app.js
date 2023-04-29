const count = document.querySelector(".count")
const mouse = document.querySelector(".fa-solid")


count.innerHTML = sessionStorage.clickcount || 0
const clickCounter = () => {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    count.innerHTML = sessionStorage.clickcount;
  }

  mouse.addEventListener("click", clickCounter)