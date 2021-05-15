const apikey = "fd29546ba9bb3f2730be5649db45b849"
let city = "oakland"
const query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`

fetch(query)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        const lat = data.coord.lat
        const lon = data.coord.lon
        fiveday(lat, lon)
    })

function fiveday(lat, lon) {
    console.log(lat, lon)

    const query5 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apikey}`
    fetch(query5)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
}