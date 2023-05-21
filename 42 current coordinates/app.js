const planet = document.querySelector('.planet')

window.addEventListener("DOMContentLoaded", () => {

  try{
    if( 'geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            planet.innerText = `Longitude : ${longitude}  
                                Latitude : ${latitude}`
        })
}
  }
  catch(err){
    console.log(err)
    planet.innerText = `Geolocation isn't supported by the browser`}
})