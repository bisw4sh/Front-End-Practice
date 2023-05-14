const imageElement = document.querySelector('.imgCon')

window.onload = async() => {
  const blob = await fetch(`https://qrtag.net/api/qr_12.png?url=https://www.biswashdhungana.com.np`, { mode: "no-cors"})
  const imageUrl = await URL.createObjectURL(blob)
  imageElement.src = await imageUrl;
}