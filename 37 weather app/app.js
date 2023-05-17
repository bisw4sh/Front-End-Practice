const api_key = `f0599c93109638ef5e3b1b63361cf6a5`
const city = document.querySelector('.city')
const submit = document.querySelector('.btn')
const details = document.querySelector('.details')


const getDetails = async(e) => {
    e.preventDefault()
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key}&units=metric`,)
        const data = await response.json()
        console.log(data)
        console.log(data.weather[0].main)

        const dataString = `
                            <h1>${city.value}</h1>
                            <span> ${data.weather[0].main} </span> : <span> ${data.weather[0].description} </span>
                            <div> Temperature : ${data.main.temp} Celsius </div>
                            <div> Pressure : ${data.main.pressure} Nm </div>
                            <div> Humidity : ${data.main.humidity} </div> `

        details.innerHTML = dataString 
    }
    catch(err){ console.log(err) }
}

submit.addEventListener('click', getDetails)
