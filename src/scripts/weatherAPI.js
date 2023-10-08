import { AUTHENTICATION } from "./authentication";
import { forecastInfo } from "./forecast";
import { currentWeatherInfo } from "./currentWeather";
import { currentDate } from "./dateFormatter";


// search location
export async function search(value) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${AUTHENTICATION}&q=${value}`,
    { mode: "cors" }
  );
  response.json().then(function (response) {
    if (response.length < 1) {
      alert('please type a city, state, or country')
    }
    else {
      let location = response[0].name;
      let day = currentDate()
      getWeather(location,day)
    }
  });

}

async function getWeather(location,day) {
  try {

    const weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${AUTHENTICATION}&q=${location}`,
      { mode: "cors" }
    );

    const forecast = await fetch(
      `https://api.weatherapi.com/v1/history.json?key=${AUTHENTICATION}&q=${location}&dt=${day}`,
      { mode: "cors" }
    );

    const futureForecast = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${AUTHENTICATION}&q=${location}&days=3`,
      { mode: "cors" }
    );

    const weatherData = await weather.json();
    const forecastData = await forecast.json();
    const futureForecastData = await futureForecast.json().then(futureForecast => {forecastInfo(futureForecast)});

    const currentWeather = Promise.all([weatherData, forecastData]).then(currentWeatherInfo(weatherData,forecastData));

  } catch (error) {
    console.log(error)
    alert('Please try again')
  }
}




