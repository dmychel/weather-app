export const display = (() => {
    // Dom Elements
    const main = document.querySelector("main");
    const currentWeatherContainer = document.createElement("section");
    const forecastContainer = document.createElement('section');

    // append
    main.appendChild(currentWeatherContainer);
    main.appendChild(forecastContainer);

    const displayCurrentWeather = (location, currentWeather, update) => {
        // reset html
        currentWeatherContainer.innerHTML = '';

        // create html elements
        const temperatureEl = document.createElement("div");
        const locationEl = document.createElement("div");
        const updateEl = document.createElement('div');

        // set content
        temperatureEl.textContent = `${currentWeather.feelslike_f}`;
        locationEl.textContent = `${location.city}, ${location.state}, ${location.country}`;
        updateEl.textContent = `${update}`


        // append
        currentWeatherContainer.appendChild(temperatureEl);
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(updateEl);

        // assign class
        currentWeatherContainer.classList = 'current-weather-container';
        temperatureEl.classList = 'temperature';
        updateEl.classList = 'update'
    };

    const displayWeek = week => {
        // reset html
        forecastContainer.innerHTML = '';
        for (let i = 0; i < week.length; i++) {
            // create html elements
            const card = document.createElement('div');
            const maxTemp = document.createElement('p')
            const minTemp = document.createElement('p')
            const condition = document.createElement('img')

            // set content
            condition.src = `${week[i].day.condition.icon}`;
            maxTemp.textContent = `${week[i].day.maxtemp_f}`;
            minTemp.textContent = `${week[i].day.mintemp_f}`;

            // append elements
            card.appendChild(condition);
            card.appendChild(maxTemp);
            card.appendChild(minTemp);
            forecastContainer.appendChild(card);

            // assign class
            card.classList = 'card';
            condition.classList = 'condition-img';
            maxTemp.classList = 'max-temp';
            minTemp.classList = 'min-temp';
        }

        forecastContainer.classList = 'forecast-container';
    };

    return { displayCurrentWeather, displayWeek };
})();
