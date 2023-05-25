const targets = document.querySelectorAll('img');

window.addEventListener('scroll', (event) => {
    targets.forEach(img => {
        console.log('Numerous Calls')
        const rect = img.getBoundingClientRect().top;
        if (rect <= window.innerHeight) {
            const src = img.getAttribute('data-lazy');
            img.setAttribute('src', src);
            img.classList.add('fade');
        }
    })
})