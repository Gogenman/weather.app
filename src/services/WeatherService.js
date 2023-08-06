class WeatherService {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    _key = '50df7764251520c1a0cf9fc3a9844c88'
    _base = 'https://api.openweathermap.org/data/2.5/weather?'
    getResource = async (url) => {
        try {
            const response = await fetch(url)
            return response.json()
        } catch (error) {
            throw new Error()
        }
    }

    getWeather = async (city) => {
        try {
            const response = await this.getResource(`${this._base}q=${city}&appid=${this._key}`)
            return this._preparingData(response)
        } catch (e) {
            throw new Error(e)
        }
        
    }

    _preparingData = (res) => {
        return {
            name: res.name,
            temp: res.main.temp,
            feels_like: res.main.feels_like,
            pressure: res.main.pressure,
            speed: res.wind.speed,
            descr: res.weather[0].main,
            icon: 'https://openweathermap.org/img/wn/' + res.weather[0].icon + '.png'
        }
    }
}

export default WeatherService


// {
//     "coord": {
//         "lon":-0.1257,
//         "lat":51.5085
//     },
//     "weather": [
//         {
//             "id":803,
//             "main":"Clouds",
//             "description":"broken clouds",
//             "icon":"04d"
//         }
//     ],
//     "base":
//     "stations",
//     "main": {
//         "temp":291.03,
//         "feels_like":290.62,
//         "temp_min":289.13,
//         "temp_max":293.4,
//         "pressure":1015,
//         "humidity":67},
//         "visibility":10000,
//         "wind": {
//             "speed":5.66,
//             "deg":290
//         },
//         "clouds": {"all":75},
        
//         "dt":1691323838,
//         "sys":{
//             "type":2,
//             "id":2075535,
//             "country":"GB",
//             "sunrise":1691296273,
//             "sunset":1691350899
//         },
//         "timezone":3600,
//         "id":2643743,
//         "name":"London",
//         "cod":200
//     }