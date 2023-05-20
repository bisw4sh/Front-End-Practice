const endpoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=28.2096&lon=83.9856&appid=f0599c93109638ef5e3b1b63361cf6a5`
const details = document.querySelector('.details')
const airQuality = [null, "Good", "Fair", "Moderate", "Poor", "Very Poor"]

document.addEventListener("DOMContentLoaded", () => {

(async() => {
    const response = await fetch(endpoint)
    const resJSON = await response.json()
    const  {co, no, no2, o3, so2, pm2_5, pm10, nh3} = resJSON.list[0].components

    const particleString = `    <h2> Air Quality is ${airQuality[resJSON.list[0].main.aqi]}  </h2>   <br>
                                <h3>Сoncentration of : </h3> <br>
                                CO (Carbon monoxide) : ${co}μg/m<sup>3</sup> <br>
                                NO (Nitrogen monoxide) : ${no}μg/m<sup>3</sup> <br>
                                NO<sub>2</sub> (Nitrogen dioxide) : ${no2}μg/m<sup>3</sup> <br>
                                O<sub>3</sub> (Ozone) : ${o3}μg/m<sup>3</sup> <br>
                                SO<sub>2</sub> (Sulphur dioxide) : ${so2}μg/m<sup>3</sup> <br>
                                PM<sub>2.5</sub> (Fine particles matter) : ${pm2_5}μg/m<sup>3</sup> <br>
                                PM<sub>10</sub> (Coarse particulate matter) : ${pm10}μg/m<sup>3</sup> <br>
                                NH<sub>3</sub> (Ammonia) :  ${nh3}μg/m<sup>3</sup> <br>                          `

    details.innerHTML =  particleString
    console.log(`Air Quality is ${airQuality[resJSON.list[0].main.aqi]}`)
})()
})