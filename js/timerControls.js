import { Timer } from "./timer.js"

const TimerControls = {
    play: document.querySelector('.play'),
    stop: document.querySelector('.stop'),
    plus: document.querySelector('.plus'),
    minus: document.querySelector('.minus'),


    playTimer() {
        clearTimeout(Timer.timerTimeOut)
        Timer.pressButton()
        Timer.countDown()
    },

    stopTimer() {
        Timer.pressButton()
        clearTimeout(Timer.timerTimeOut)
    },

    plusFive() {
        Timer.pressButton()
        const newMinutes = Number(Timer.minutes.textContent)
        Timer.minutes.textContent = String(newMinutes + 5).padStart(2, 0)    
    },

    minusFive() {
        Timer.pressButton()

        const newMinutes = Number(Timer.minutes.textContent)

        if((newMinutes - 5) <= 0) {
            Timer.minutes.textContent = '00'
            Timer.seconds.textContent = '00'
        } else {
            Timer.minutes.textContent = String(newMinutes - 5).padStart(2, 0)    
        }
    }

}

const EventTimerControls = {
    playPressButton: TimerControls.play.addEventListener('click', TimerControls.playTimer),
    stopPressButton: TimerControls.stop.addEventListener('click', TimerControls.stopTimer),
    plusPressButton: TimerControls.plus.addEventListener('click', TimerControls.plusFive),
    minusPressButtom: TimerControls.minus.addEventListener('click', TimerControls.minusFive),
}

export { TimerControls, EventTimerControls }