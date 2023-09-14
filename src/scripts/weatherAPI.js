import {AUTHENTICATION } from "./authentication";
import { forecastInfo } from "./forecast";
import { currentWeatherInfo } from "./currentWeather";

// fetch weatherAPI
// display weatherAPI data
    // display weatherAPI 3 day forecast
    // display in F & C
    // search current weather for desired location

async function getForecast(){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${AUTHENTICATION}&q=boston&days=3`, {mode: 'cors'});

    response.json().then(function(response){
        console.log(response)
        forecastInfo(response)
    })
}

async function getCurrentWeather(){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${AUTHENTICATION}&q=boston`)

    response.json().then(function(response){
        console.log(response)
        currentWeatherInfo(response)
    })
}

getForecast()
getCurrentWeather()
