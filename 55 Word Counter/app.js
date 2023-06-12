const txtarea = document.getElementById('comment_text')
const count = document.querySelector('.count')

//TODO such that it ignores the characters

txtarea.addEventListener('keydown', () => {
    const txtarray = txtarea.value.trim().split(" ")
    count.textContent = `Total Word : ${txtarray.length}`

})