export function background(value) {
    const main = document.querySelector('main')
    let condition = value.toLowerCase()
    console.log(condition)
    if (condition.includes('sunny')) {
        console.log(condition)
        main.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(254, 166, 32), rgb(85, 51, 1))'
    }
    else if (condition.includes('cloudy')) {
        console.log(condition)
        main.style.backgroundImage = 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.473), rgb(0, 185, 223), rgb(0, 185, 223))'
    }
    else if (condition.includes('rain')) {
        console.log(condition)
        main.style.backgroundImage = 'linear-gradient(to bottom right, rgb(111, 158, 194), rgb(10, 52, 85), rgb(0, 16, 27))'
    }
    else if (condition.includes('snow')) {
        console.log(condition)
        main.style.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 250, 250), rgb(102, 177, 216), rgb(48, 79, 95))'
    }
    else if (condition.includes('mist')) {
        console.log(condition)
        main.style.backgroundImage = 'linear-gradient(to bottom right, rgb(227, 229, 231), rgb(26, 179, 135), rgb(10, 75, 56)))'
    }
    else if (condition.includes('heavy')) {
        console.log(condition)
        main.style.backgroundImage = 'linear-gradient(to bottom right, #727070, #776e9c, #0602161))'
    }
}
