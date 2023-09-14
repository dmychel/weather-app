import { display } from "./dom";

export function currentWeatherInfo(weather) {
  // get current weather
  // get current city, state, country
  // get update
  let location = {
    city: weather.location.name,
    state: weather.location.region,
  };
  let currentWeather = weather.current;
  let update = weather.current.last_updated;

  display.displayCurrentWeather(location, currentWeather, update);
}
