import { background } from "./dynamicBackground";
import { cardBackground } from "./dynamicBackground";
import { formatDate } from "./dateFormatter";
import { formatCurrentDate } from "./dateFormatter";

export const display = (() => {
    // Dom Elements
    const main = document.querySelector("main");
    const currentWeatherContainer = document.createElement("section");
    const forecastContainer = document.createElement('section');

    // append
    main.appendChild(currentWeatherContainer);
    main.appendChild(forecastContainer);

    const displayCurrentWeather = (location, weather, forecastTemp, update) => {
        background(weather.condition.text)
        // reset html
        currentWeatherContainer.innerHTML = '';

        // create html elements
        const locationEl = document.createElement("div");
        const feelsLikeEl = document.createElement("div");
        const tempEl = document.createElement('p');
        const condition = document.createElement('p');
        const forecastContainer = document.createElement('div');
        const highTemp = document.createElement('p');
        const lowTemp = document.createElement('p');
        const updateEl = document.createElement('div');

        // set content
        locationEl.textContent = `${location.city}, ${location.state}`;
        tempEl.textContent = `${weather.temp_f}` + '°';
        condition.textContent = `${weather.condition.text}`;
        highTemp.textContent = `H:${forecastTemp.maxtemp_f}`;
        lowTemp.textContent = `L:${forecastTemp.mintemp_f}`
        updateEl.textContent = `Updated ${formatCurrentDate(update)}`;


        // append
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(tempEl);
        currentWeatherContainer.appendChild(condition);
        currentWeatherContainer.appendChild(forecastContainer);
        currentWeatherContainer.appendChild(updateEl);

        forecastContainer.append(highTemp);
        forecastContainer.append(lowTemp);


        // assign class
        currentWeatherContainer.classList = 'current-weather-container';
        condition.classList = 'current-condition'
        feelsLikeEl.classList = 'temperature';
        tempEl.classList = 'current-temp';
        forecastContainer.classList = 'current-forecast-container'
        locationEl.classList = 'current-location';
        updateEl.classList = 'update';
    };

    const displayWeek = week => {
        // reset html
        forecastContainer.innerHTML = '';
        for (let i = 0; i < week.length; i++) {
            // create html elements
            const card = document.createElement('div');
            const maxTemp = document.createElement('p');
            const minTemp = document.createElement('p');
            const condition = document.createElement('img');
            const date = document.createElement('p');

            // set content
            condition.src = `${week[i].day.condition.icon}`;
            maxTemp.textContent = `${week[i].day.maxtemp_f}` + '°';
            minTemp.textContent = `${week[i].day.mintemp_f}` + '°';
            date.textContent = `${formatDate(week[i].date)}` + '°';


            // append elements
            card.appendChild(condition);
            card.appendChild(maxTemp);
            card.appendChild(minTemp);
            card.appendChild(date)
            forecastContainer.appendChild(card);

            // assign class
            card.classList = 'card';
            condition.classList = 'condition-img';
            forecastContainer.classList = 'forecast-container';
            maxTemp.classList = 'max-temp';
            minTemp.classList = 'min-temp';
        }
    };

    // celsius
    const displayWeek_C = week => {
        // reset html
        forecastContainer.innerHTML = '';
        for (let i = 0; i < week.length; i++) {
            // create html elements
            const card = document.createElement('div');
            const maxTemp = document.createElement('p');
            const minTemp = document.createElement('p');
            const condition = document.createElement('img');
            const date = document.createElement('p');

            // set content
            condition.src = `${week[i].day.condition.icon}`;
            maxTemp.textContent = `${week[i].day.maxtemp_c}` + '°';
            minTemp.textContent = `${week[i].day.mintemp_c}` + '°';
            date.textContent = `${formatDate(week[i].date)}`;


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

    const displayCurrentWeather_C = (location, weather, forecastTemp, update) => {
        background(weather.condition.text)
        // reset html
        currentWeatherContainer.innerHTML = '';

        // create html elements
        const locationEl = document.createElement("div");
        const feelsLikeEl = document.createElement("div");
        const tempEl = document.createElement('p');
        const condition = document.createElement('p');
        const forecastContainer = document.createElement('div');
        const highTemp = document.createElement('p');
        const lowTemp = document.createElement('p');
        const updateEl = document.createElement('div');

        // set content
        locationEl.textContent = `${location.city}, ${location.state}`;
        tempEl.textContent = `${weather.temp_c}` + '°';
        condition.textContent = `${weather.condition.text}`;
        highTemp.textContent = `H:${forecastTemp.maxtemp_c}`;
        lowTemp.textContent = `L:${forecastTemp.mintemp_c}`
        updateEl.textContent = `Updated ${formatCurrentDate(update)}`;


        // append
        currentWeatherContainer.appendChild(locationEl);
        currentWeatherContainer.appendChild(tempEl);
        currentWeatherContainer.appendChild(condition);
        currentWeatherContainer.appendChild(forecastContainer);
        currentWeatherContainer.appendChild(updateEl);

        forecastContainer.append(highTemp);
        forecastContainer.append(lowTemp);


        // assign class
        currentWeatherContainer.classList = 'current-weather-container';
        condition.classList = 'current-condition'
        feelsLikeEl.classList = 'temperature';
        tempEl.classList = 'current-temp';
        forecastContainer.classList = 'current-forecast-container'
        locationEl.classList = 'current-location';
        updateEl.classList = 'update';
    };

    const displayHourlyForecast = forecast => {
        forecastContainer.innerHTML = '';
        console.log(forecast)
        for (let i = 0; i < week.length; i++) {
            // create html elements
            const hourCard = document.createElement('div');
            const maxTemp = document.createElement('p');
            const minTemp = document.createElement('p');
            const condition = document.createElement('img');
            const date = document.createElement('p');

            // set content
            condition.src = `${week[i].day.condition.icon}`;
            maxTemp.textContent = `${week[i].day.maxtemp_f}` + '°';
            minTemp.textContent = `${week[i].day.mintemp_f}` + '°';
            date.textContent = `${formatDate(week[i].date)}` + '°';


            // append elements
            card.appendChild(condition);
            card.appendChild(maxTemp);
            card.appendChild(minTemp);
            card.appendChild(date)
            forecastContainer.appendChild(card);

            // assign class
            card.classList = 'card';
            condition.classList = 'condition-img';
            forecastContainer.classList = 'forecast-container';
            maxTemp.classList = 'max-temp';
            minTemp.classList = 'min-temp';
        }
    }

    return { displayCurrentWeather, displayWeek, displayWeek_C, displayCurrentWeather_C, displayHourlyForecast };
})();
