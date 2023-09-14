import { display } from "./dom";

export function forecastInfo(weather) {
    let scale = document.getElementById('scale').checked;
    let week = weather.forecast.forecastday;
    if (scale != true) {
        display.displayWeek(week)
    }
    else {
        display.displayWeek_C(week)
    }


}