import { display } from "./dom";

export function forecastInfo(weather) {
    let week = weather.forecast.forecastday;
    display.displayWeek(week)
}