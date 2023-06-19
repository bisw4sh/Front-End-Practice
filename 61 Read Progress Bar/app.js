const progressBar = document.querySelector('.bar')
const scrollbarHeight = document.documentElement.scrollHeight - window.innerHeight

window.addEventListener('scroll', (e) => {
    const percentScroll = Math.round((window.scrollY / scrollbarHeight) * 100)
    progressBar.value = percentScroll
    console.log(`${percentScroll}% scrolled`)
})