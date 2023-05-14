const anime = document.querySelector('.anime')
const character = document.querySelector('.character')
const quote = document.querySelector('.quote')


window.onload = (async () =>{

    const response = await fetch('https://animechan.vercel.app/api/random')
    const responseJSON = await response.json()
    
    const animeText = await responseJSON.anime
    const animeChar = await responseJSON.character
    const animeQuote = await responseJSON.quote
    
    anime.innerText = `Anime: ${animeText}`
    character.innerText = `Character: ${animeChar}`
    quote.innerText = `Quote: ${animeQuote}`

  })()