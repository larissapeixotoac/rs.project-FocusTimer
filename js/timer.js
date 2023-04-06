const Timer = {
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds'),
    timerTimeOut: 0,

    kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
    buttonPressAudio: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),

    countDown() {
        Timer.timerTimeOut = setTimeout(function() {
            let min = Number(Timer.minutes.textContent)
            let sec = Number(Timer.seconds.textContent)

            let isFinished = Timer.minutes.textContent == 0 && Timer.seconds.textContent == 0

            if(isFinished) {
                Timer.timerEnd()
                return
            }

            if( sec <= 0) {
                sec = 60
                Timer.minutes.textContent = String(min - 1).padStart(2, 0)
            }

            Timer.seconds.textContent = String(sec - 1).padStart(2, 0)

            Timer.countDown()
        }, 1000)
    },

    pressButton() {
        Timer.buttonPressAudio.play()
    },

    timerEnd() {
        Timer.kitchenTimer.play()
    },
}

export { Timer }