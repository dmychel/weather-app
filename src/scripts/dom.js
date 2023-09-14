export const display = (() => {
    const main = document.querySelector("main");
    const displayCurrentWeather = (location, currentWeather, update) => {
        console.log(location, currentWeather, update);
        const currentWeatherContainer = document.createElement("section");
        const temperatureEl = document.createElement("div");
        const locationEl = document.createElement("div");
        const updateEl = document.createElement('div');

        temperatureEl.textContent = `${currentWeather.feelslike_f}`;
        locationEl.textContent = `${location.city}, ${location.state}, ${location.country}`;
        updateEl.textContent = `${update}`


        main.appendChild(currentWeatherContainer);
        currentWeatherContainer.appendChild(temperatureEl)
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(updateEl)
    };

    const displayWeek = () => { };

    return { displayCurrentWeather, displayWeek };
})();
