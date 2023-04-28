const cont = document.getElementById("cont")
const tog = document.getElementById("tog")



cont.addEventListener('click', () => {
    if(cont.classList.contains('.active')){
        document.body.backgroundColor = "var(--darkgradient)"
    }
    cont.classList.toggle("active")
    tog.classList.toggle("active")

})





