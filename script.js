setInterval(updateClock, 1000)

const handSecond = document.querySelector('[hand-second]')
const handMinute = document.querySelector('[hand-minute]')
const handHour = document.querySelector('[hand-hour]')

function updateClock(){
    const date = new Date();
    
    const secondRatio = date.getSeconds() / 60
    const minuteRatio = (date.getMinutes() + secondRatio) / 60
    const hourRatio = (date.getHours() + minuteRatio) / 12

    handSecond.style.setProperty('--rotation', `${360 * secondRatio}deg`)
    handMinute.style.setProperty('--rotation', `${360 * minuteRatio}deg`)
    handHour.style.setProperty('--rotation', `${360 * hourRatio}deg`)
}

updateClock()
