const hourElemet = document.querySelector(".hour")
const minElemet = document.querySelector(".minute")
const secElemet = document.querySelector(".second")
const millisecElemet = document.querySelector(".millisecond")

const startButton = document.querySelector(".start")
const pauseButton = document.querySelector(".pause")
const stopButton = document.querySelector(".stop")

let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval

function startTimer() {
    millisecond++
    if (millisecond < 9) {
        millisecElemet.innerText = '0' + millisecond
    }
    if (millisecond > 9) {
        millisecElemet.innerText = millisecond
    }
    if (millisecond > 99) {
        second++
        secElemet.innerText = '0' + second
        millisecond = 0
        millisecElemet.innerText = '0' + millisecond
    }


    if (second < 9) {
        secElemet.innerText = '0' + second
    }
    if (second > 9) {
        secElemet.innerText = second
    }
    if (second > 59) {
        minute++
        minElemet.innerText = '0' + minute
        second = 0
        secElemet.innerText = '0' + second
    }

    if (minute > 9) {
        minElemet.innerText = minute
    }
    if (hour > 9) {
        hourElemet.innerText = hour
    }
}

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    interval
    hourElemet.textContent = '00'
    minElemet.textContent = '00'
    secElemet.textContent = '00'
    millisecElemet.textContent = '00'
})