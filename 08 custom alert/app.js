const alert = document.querySelector('.alert')
const close = document.querySelector('.close')
const btn = document.querySelector('.btn')

const showalert = () => {
    document.body.style.backgroundColor = "var(--color2)"
    console.log('SHOWALERT')
    alert.style.display = "block"

}

const closealert = () => {
    console.log('CLOSEALERT')
    alert.style.display = "none"
    document.body.style.backgroundColor = "var(--color1)"

}


btn.addEventListener('click', showalert)
close.addEventListener('click', closealert)
alert.addEventListener('click', closealert)