const cont = document.getElementById("cont")
const tog = document.getElementById("tog")
const mode = document.getElementById("mode")


cont.addEventListener('click', () => {
   

    if(!cont.classList.contains('active')){
        document.body.style.background = "var(--darkgradient)"
        mode.innerText = "Dark Mode"
            cont.classList.toggle("active")
            tog.classList.toggle("active")

    }
    else{
        document.body.style.background = "var(--lightgradient)"
        mode.innerText = "Light Mode"
            cont.classList.remove("active")
            tog.classList.remove("active")

    }
})