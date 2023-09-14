export function forecastInfo(weather){
    // get location city,state, and country
    // get 3 day weather forecast
    let location = {
        city : weather.location.name,
        state: weather.location.region,
        country: weather.location.country
    };
    let forecast = weather.forecast;
    let day = weather.forecast.forecastday;

    for(let i = 0; i < day.length; i++){
        // console.log(day[i])
    }
    // console.log(forecast)
    // console.log(location)
}