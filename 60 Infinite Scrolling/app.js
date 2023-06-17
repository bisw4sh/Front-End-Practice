const cont = document.querySelector('.container')
let currentScroll = 0
let count = 10

const randColor = () => `rgba(${getRandomNum()},${getRandomNum()},${getRandomNum()}, ${Math.random()} )`
const getRandomNum = () => Math.random() * 255
document.querySelectorAll('.innerBox').forEach( box => box.style.backgroundColor = randColor())

window.addEventListener('scroll', () => {
    if(currentScroll + window.scrollY > 100 + currentScroll){
       currentScroll = currentScroll + 100
        createMoreBoxes()
    }
})

function createMoreBoxes(){
    const newInnerBox = document.createElement('div')
    newInnerBox.classList.add('innerBox', `box${count}`)
    newInnerBox.innerHTML = `Box ${count}`
    newInnerBox.style.backgroundColor = randColor()
    cont.appendChild(newInnerBox)
    count++
}