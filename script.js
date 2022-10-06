const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const headingEl = document.querySelector('h1')


const countDown = setInterval(() => {
    let countDownDate = new Date("Jan 01, 2023 00:00:00").getTime()
    let now = new Date().getTime()

    const period = countDownDate - now

    const days = Math.floor(period / (1000 * 60 * 60 * 24))
    const hours = Math.floor(period % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutes = Math.floor(period % (1000 * 60 * 60) / (1000 * 60))
    const seconds = Math.floor(period % (1000 * 60) / 1000)

    daysEl.innerHTML = days
    hoursEl.innerHTML = hours
    minutesEl.innerHTML = minutes
    secondsEl.innerHTML = seconds


    if (period < 0) {
        clearInterval(countDown);
        headingEl.innerHTML('WE HAVE LAUNCHED!!!')
    }

}, 1000)