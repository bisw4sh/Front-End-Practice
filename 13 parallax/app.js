const leftBat = document.getElementById('left-bat')
const rightBat = document.getElementById('right-bat')
const leftGate = document.getElementById('gate-left')
const rightGate = document.getElementById('gate-right')


window.addEventListener('scroll', () => {
    let val = window.scrollY

    leftBat.style.left = -val * 1.5 + 'px'
    // leftBat.style.bottom = -val * 1.5 + 'px'
    rightBat.style.right = -val * 1.5 + 'px'
    rightBat.style.bottom = -val * 1.5 + 'px'
    leftGate.style.left = -val * 1.5 + 'px'
    rightGate.style.right = -val * 1.5 + 'px'
})