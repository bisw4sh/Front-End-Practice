const search = document.querySelector('.search')
const btn = document.querySelector('.fa-sharp.fa-solid.fa-magnifying-glass')

const insert = (event) => {
    event
    btn.style.left = '-40px';
    btn.style.display = 'inline-block';

    console.log('focused here')
}


const unsert = () => {
    btn.style.left = '0px';

    console.log('blured again')
}

search.addEventListener('focus', insert())
search.addEventListener('blur', unsert())

