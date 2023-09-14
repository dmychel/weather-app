import { AUTHENTICATION } from "./authentication";
import { forecastInfo } from "./forecast";
import { currentWeatherInfo } from "./currentWeather";

// fetch weatherAPI
// display weatherAPI data
// display weatherAPI 3 day forecast
// display in F & C
// search current weather for desired location

export async function search(value) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${AUTHENTICATION}&q=${value}`,
    { mode: "cors" }
  );
  response.json().then(function (response) {
    if (response.length < 1) {
      console.log(response)
      alert('please type a city, state, or country')
    }
    else {
      let location = response[0].name;
      getForecast(location);
      getCurrentWeather(location);
    }
  });

}

async function getForecast(value) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${AUTHENTICATION}&q=${value}&days=3`,
      { mode: "cors" }
    );

    response.json().then(function (response) {
      forecastInfo(response);
    });
  } catch (error) {
    alert('error please try again')
  }
}

async function getCurrentWeather(value) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${AUTHENTICATION}&q=${value}`,
      { mode: "cors" }
    );

    response.json().then(function (response) {
      currentWeatherInfo(response);
    });
  } catch (error) {
    alert('error please try again')
  }
}
