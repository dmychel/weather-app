export function background(value) {
    const main = document.querySelector('main')
    let condition = value.toLowerCase()
    console.log(condition)
    if (condition.includes('sunny')) {
        console.log(condition)
        main.style.backgroundColor = '#fea620'
    }
    else if (condition.includes('cloudy')) {
        console.log(condition)
        main.style.backgroundColor = '#00b9df'
    }
    else if (condition.includes('rain')) {
        console.log(condition)
        main.style.backgroundColor = '#003e6f'
    }
    else if (condition.includes('snow')) {
        console.log(condition)
        main.style.backgroundColor = '#66b1d8'
    }
    else if (condition.includes('mist')) {
        console.log(condition)
        main.style.backgroundClip = '#1ab387'
    }
    else if (condition.includes('heavy')) {
        console.log(condition)
        main.style.backgroundColor = '#776e9c'
    }
}
