import { AUTHENTICATION } from "./authentication";
import { forecastInfo } from "./forecast";
import { currentWeatherInfo } from "./currentWeather";

// fetch weatherAPI
// display weatherAPI data
// display weatherAPI 3 day forecast
// display in F & C
// search current weather for desired location


export async function search(value) {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${AUTHENTICATION}&q=${value}` , { mode: 'cors' })

    response.json().then(function (response) {
        let location = response[0].name
        getForecast(location)
        getCurrentWeather(location)
    })
}

async function getForecast(value) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${AUTHENTICATION}&q=${value}&days=3`, { mode: 'cors' });

    response.json().then(function (response) {
        console.log(response)
        forecastInfo(response)
    })
}

async function getCurrentWeather(value) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${AUTHENTICATION}&q=${value}`, { mode: 'cors' })

    response.json().then(function (response) {
        console.log(response)
        currentWeatherInfo(response)
    })
}

