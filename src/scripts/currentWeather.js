import { display } from "./dom";

export function currentWeatherInfo(weather) {
  let scale = document.getElementById('scale').checked;
  let location = {
    city: weather.location.name,
    state: weather.location.region,
  };
  let currentWeather = weather.current;
  let update = weather.current.last_updated;

  if (scale != true) {
    display.displayCurrentWeather(location, currentWeather, update)
  }
  else {
    display.displayCurrentWeather_C(location, currentWeather, update);
  }
};
