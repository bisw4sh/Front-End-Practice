const hamburger = document.querySelector('.fa-bars')
const textEl = document.querySelectorAll('.text')
const navigation = document.querySelector('.navigation')
const logOut = document.querySelector('.logOut')

hamburger.addEventListener('click', () => {
    textEl.forEach( txt => {
        txt.classList.toggle('active')
        if(textEl[0].classList.contains('active')){
            navigation.style.width = `4rem`
            logOut.style.padding = 'unset'
            hamburger.style.padding = 'unset'
            hamburger.style.textAlign = 'center'
        }
        else{
            navigation.style.width = `13rem`
        }
    })
    
})