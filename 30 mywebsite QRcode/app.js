const imageElement = document.querySelector('.imgCon')
const submit = document.querySelector('.submit')
const url = document.querySelector('.url')


const genQR = async(e) => {
  e.preventDefault()

  try{
  let string = url.value || `www.biswashdhungana.com.np`
  const response = await fetch(`https://qrtag.net/api/qr_12.png?url=https://${string}`, {redirect: 'follow'})
  let blob = await response.blob()
  const imageUrl = await URL.createObjectURL(blob)
  imageElement.src = await imageUrl  

  }
  catch(err){

    console.log(err)
    console.log("Turn OFF CORS policy to view JS generated")
    document.querySelector('.jsGenerated').style.display = 'none'

  }
}

submit.addEventListener('click', genQR)