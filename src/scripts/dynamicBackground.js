export function background(value) {
    const main = document.querySelector('main')
    let condition = value.toLowerCase()
    if (condition.includes('sunny')) {
        main.classList = 'sunny'
    }
    else if (condition.includes('cloudy') || condition.includes('clear')) {
        main.classList = 'cloudy'
    }
    else if (condition.includes('overcast') || condition.includes('rain')) {
        main.classList = 'rain'
    }
    else if (condition.includes('snow')) {
        main.classList = 'snow'
    }
    else if (condition.includes('mist')) {
        main.classList = 'mist'
    }
    else if (condition.includes('heavy')) {
        main.classList = 'heavy'
    }
}
