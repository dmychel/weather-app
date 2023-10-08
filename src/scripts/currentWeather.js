import { display } from "./dom";

export function currentWeatherInfo(weather,forecast) {
  let scale = document.getElementById('scale').checked;

  // location
  let location = {
    city: weather.location.name,
    state: weather.location.region,
  };

  // current weather
  let currentWeather = weather.current;
  let update = weather.current.last_updated;

  // forecast
  let forecastTemp = forecast.forecast.forecastday[0].day

  // display metric
  if (scale != true) {
    display.displayCurrentWeather(location, currentWeather, forecastTemp, update)
  }
  else {
    display.displayCurrentWeather_C(location, currentWeather, forecastTemp, update);
  }
};
