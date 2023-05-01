const links = document.getElementsByTagName('a')

links.addEventListner('click', () => {
    if(links.classList.contains('active')){
        links.classList.remove("active")
    }
    else{
        links.classList.add('active')
    }

})