import { currentTime } from "./dateFormatter";
import { display } from "./dom";
import { forecastInfo } from "./forecast";

export async function currentWeatherInfo(weather, forecast) {
  let hourlyForecast = [];

  const parseHourly = value => {
    let hour = value.forecast.forecastday[0].hour;
    for (let i = 0; i < hour.length; i++) {
      hourlyForecast.push(hour[i].temp_f, hour[i].condition.text);
   };
  };

  parseHourly(forecast);
  currentTime()

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
  };
};