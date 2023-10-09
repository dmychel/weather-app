export function background(value) {
    const body = document.querySelector('body')
    let condition = value.toLowerCase()
    if (condition.includes('sunny')) {
        body.classList = 'sunny'
    }
    else if (condition.includes('cloudy') || condition.includes('clear')) {
        body.classList = 'cloudy'
    }
    else if (condition.includes('overcast') || condition.includes('rain')) {
        body.classList = 'rain'
    }
    else if (condition.includes('snow')) {
        body.classList = 'snow'
    }
    else if (condition.includes('mist')) {
        body.classList = 'mist'
    }
    else if (condition.includes('heavy')) {
        body.classList = 'heavy'
    }
}
