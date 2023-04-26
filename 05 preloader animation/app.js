const loader = document.getElementById('preloader')

window.addEventListener('load', load => {

    window.removeEventListener('load', load, false)              
    setTimeout(function(){loader.style.display = 'none'},1100)
  
  },false)