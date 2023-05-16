const imageElement = document.querySelector('.imgCon')

window.onload = async() => {
  try{

  const response = await fetch(`https://qrtag.net/api/qr_12.png?url=https://www.biswashdhungana.com.np`, {redirect: 'follow'})
  let blob = await response.blob()
  console.log(blob)
  const imageUrl = await URL.createObjectURL(blob)
  imageElement.src = await imageUrl  

  }
  catch(err){

    console.log(err)
    console.log("Turn OFF CORS policy to view JS generated")
    document.querySelector('.imgCon').style.display = 'none'

  }
}