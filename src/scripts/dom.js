export const display = (() => {
    const main = document.querySelector("main");
    const displayCurrentWeather = (location, currentWeather, update) => {
        // console.log(location, currentWeather, update);
        const currentWeatherContainer = document.createElement("section");
        const temperatureEl = document.createElement("div");
        const locationEl = document.createElement("div");
        const updateEl = document.createElement('div');

        temperatureEl.textContent = `${currentWeather.feelslike_f}`;
        locationEl.textContent = `${location.city}, ${location.state}, ${location.country}`;
        updateEl.textContent = `${update}`


        main.appendChild(currentWeatherContainer);
        currentWeatherContainer.appendChild(temperatureEl);
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(updateEl);

        currentWeatherContainer.classList = 'current-weather-container';
        temperatureEl.classList = 'temperature';
        updateEl.classList = 'update'
    };

    const displayWeek = week => {
        const forecastContainer = document.createElement('section');

        main.appendChild(forecastContainer)

        for (let i = 0; i < week.length; i++) {
            const card = document.createElement('div');
            const maxTemp = document.createElement('p')
            const minTemp = document.createElement('p')
            const rain = document.createElement('p')

            maxTemp.textContent = `${week[i].day.maxtemp_f}`;
            minTemp.textContent = `${week[i].day.mintemp_f}`;
            rain.textContent = `${week[i].day.condition.text}`

            card.appendChild(maxTemp);
            card.appendChild(minTemp);
            card.appendChild(rain);
            forecastContainer.appendChild(card);

            card.classList = 'card';
        }

        forecastContainer.classList = 'forecast-container';

        console.log(week)
    };

    return { displayCurrentWeather, displayWeek };
})();
