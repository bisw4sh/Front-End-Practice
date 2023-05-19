const container = document.querySelector('.container')

const observer = new IntersectionObserver((entries) => {

    entries.forEach(
        entry => {
            console.log(entry)
            container.innerText = `visibility is ${entry.isVisible}
                                    intersection is ${entry.isIntersecting}`
            if(entry.isIntersecting){
                container.style.scale = `1.5`
                container.style.color = `black`
                container.style.rotate = `45deg`

            }
            else{
                container.style.scale = `1`
            }

        }
    )

}, {
    root: null,
    rootMargin: '0px',
    threshold: .9
})


observer.observe(container)