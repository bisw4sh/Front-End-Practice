const hr = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')

window.setInterval(()=> {
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(hours<10)
        hours = '0'+ hours

    if(minutes<10)
        minutes = '0'+ minutes

    if(seconds<10)
        seconds = '0'+ seconds

    hr.innerText= hours
    min.innerText= minutes
    sec.innerText= seconds
} 
, 1000)

