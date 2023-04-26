const loader = document.getElementById('preloader')

window.addEventListener('load', load => {

    window.removeEventListener('load', load, false)              
    setTimeout( () => loader.style.display = 'none' , 1100)
  
  },false)