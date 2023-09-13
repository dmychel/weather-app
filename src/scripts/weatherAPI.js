console.log('hello world')
import {AUTHENTICATION } from "./authentication";

const body = document.querySelector('body');

async function getForecast(){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${AUTHENTICATION}&q=boston&days=5`, {mode: 'cors'});

    response.json().then(function(response){
        console.log(response)
    })
}

getForecast()