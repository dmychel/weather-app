export const display = (() => {
    // Dom Elements
    const main = document.querySelector("main");
    const currentWeatherContainer = document.createElement("section");
    const forecastContainer = document.createElement('section');

    // append
    main.appendChild(currentWeatherContainer);
    main.appendChild(forecastContainer);

    const displayCurrentWeather = (location, weather, update) => {
        // reset html
        currentWeatherContainer.innerHTML = '';

        // create html elements
        const condition = document.createElement('img');
        const feelsLikeEl = document.createElement("div");
        const tempEl = document.createElement('p');
        const locationEl = document.createElement("div");
        const updateEl = document.createElement('div');

        // set content
        condition.src = `${weather.condition.icon}`;
        feelsLikeEl.textContent = `Feels like ${weather.feelslike_f}`;
        tempEl.textContent = `${weather.temp_f}`;
        locationEl.textContent = `${location.city}, ${location.state}`;
        updateEl.textContent = `${update}`;


        // append
        currentWeatherContainer.appendChild(condition);
        currentWeatherContainer.appendChild(feelsLikeEl);
        currentWeatherContainer.appendChild(tempEl);
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(updateEl);

        // assign class
        currentWeatherContainer.classList = 'current-weather-container';
        condition.classList = 'current-condition-img'
        feelsLikeEl.classList = 'temperature';
        tempEl.classList = 'current-temp';
        locationEl.classList = 'current-location';
        updateEl.classList = 'update';
    };

    const displayWeek = week => {
        // reset html
        forecastContainer.innerHTML = '';
        for (let i = 0; i < week.length; i++) {
            // create html elements
            console.log(week[i])
            const card = document.createElement('div');
            const maxTemp = document.createElement('p');
            const minTemp = document.createElement('p');
            const condition = document.createElement('img');
            const date = document.createElement('p');

            // set content
            condition.src = `${week[i].day.condition.icon}`;
            maxTemp.textContent = `${week[i].day.maxtemp_f}`;
            minTemp.textContent = `${week[i].day.mintemp_f}`;
            date.textContent = `${week[i].date}`;


            // append elements
            card.appendChild(condition);
            card.appendChild(maxTemp);
            card.appendChild(minTemp);
            card.appendChild(date)
            forecastContainer.appendChild(card);

            // assign class
            card.classList = 'card';
            condition.classList = 'condition-img';
            maxTemp.classList = 'max-temp';
            minTemp.classList = 'min-temp';
        }

        forecastContainer.classList = 'forecast-container';
    };

    // celsius
    const displayWeek_C = week => {
        // reset html
        forecastContainer.innerHTML = '';
        for (let i = 0; i < week.length; i++) {
            // create html elements
            console.log(week[i])
            const card = document.createElement('div');
            const maxTemp = document.createElement('p');
            const minTemp = document.createElement('p');
            const condition = document.createElement('img');
            const date = document.createElement('p');

            // set content
            condition.src = `${week[i].day.condition.icon}`;
            maxTemp.textContent = `${week[i].day.maxtemp_c}`;
            minTemp.textContent = `${week[i].day.mintemp_c}`;
            date.textContent = `${week[i].date}`;


            // append elements
            card.appendChild(condition);
            card.appendChild(maxTemp);
            card.appendChild(minTemp);
            card.appendChild(date)
            forecastContainer.appendChild(card);

            // assign class
            card.classList = 'card';
            condition.classList = 'condition-img';
            maxTemp.classList = 'max-temp';
            minTemp.classList = 'min-temp';
        }

        forecastContainer.classList = 'forecast-container';
    };

    const displayCurrentWeather_C = (location, weather, update) => {
        // reset html
        currentWeatherContainer.innerHTML = '';

        // create html elements
        const condition = document.createElement('img');
        const feelsLikeEl = document.createElement("div");
        const tempEl = document.createElement('p');
        const locationEl = document.createElement("div");
        const updateEl = document.createElement('div');

        // set content
        condition.src = `${weather.condition.icon}`;
        feelsLikeEl.textContent = `Feels like ${weather.feelslike_c}`;
        tempEl.textContent = `${weather.temp_c}`;
        locationEl.textContent = `${location.city}, ${location.state}`;
        updateEl.textContent = `${update}`;


        // append
        currentWeatherContainer.appendChild(condition);
        currentWeatherContainer.appendChild(feelsLikeEl);
        currentWeatherContainer.appendChild(tempEl);
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(updateEl);

        // assign class
        currentWeatherContainer.classList = 'current-weather-container';
        condition.classList = 'current-condition-img'
        feelsLikeEl.classList = 'temperature';
        tempEl.classList = 'current-temp';
        locationEl.classList = 'current-location';
        updateEl.classList = 'update';
    };

    return { displayCurrentWeather, displayWeek, displayWeek_C, displayCurrentWeather_C };
})();
