const TimerControls = {
    play: document.querySelector('.play'),
    stop: document.querySelector('.stop'),
    plus: document.querySelector('.plus'),
    minus: document.querySelector('.minus'),


    playTimer() {
        clearTimeout(Timer.timerTimeOut)
        Timer.countDown()
    },

    stopTimer() {
        clearTimeout(Timer.timerTimeOut)
    },

    plusFive() {
        const newMinutes = Number(Timer.minutes.textContent)
        Timer.minutes.textContent = String(newMinutes + 5).padStart(2, 0)    
    },

    minusFive() {
        const newMinutes = Number(Timer.minutes.textContent)

        if((newMinutes - 5) <= 0) {
            Timer.minutes.textContent = '00'
            Timer.seconds.textContent = '00'
        } else {
            Timer.minutes.textContent = String(newMinutes - 5).padStart(2, 0)    
        }
    }

}

const Timer = {
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds'),
    timerTimeOut: 0,

    countDown() {
        Timer.timerTimeOut = setTimeout(function() {
            let min = Number(Timer.minutes.textContent)
            let sec = Number(Timer.seconds.textContent)

            let isFinished = Timer.minutes.textContent == 0 && Timer.seconds.textContent == 0

            if(isFinished) {
                AmbientSound.timerEnd()
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


}

const AmbientSound = {
    forestButton: document.querySelector('.forest'),
    rainButton: document.querySelector('.rain'),
    storeButton: document.querySelector('.store'),
    campButton: document.querySelector('.camp'),

    bgforest: new Audio('assets/Floresta.wav'),
    bgRain: new Audio('assets/Chuva.wav'),
    bgStore: new Audio('assets/Cafeteria.wav'),
    bgFire: new Audio('assets/Lareira.wav'),

    kitchenTimer: new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),

    soundOfNature() {
        if(AmbientSound.forestButton.classList.contains('soundSelect')) {
            AmbientSound.forestButton.classList.toggle('soundSelect')
            AmbientSound.bgforest.pause()
            AmbientSound.forestButton.classList.remove('select')

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()
            
            AmbientSound.bgforest.loop = true
            AmbientSound.bgforest.play()
            AmbientSound.forestButton.classList.toggle('soundSelect')
            AmbientSound.forestButton.classList.add('select')
        }
    },
    soundOfRain() {
        if(AmbientSound.rainButton.classList.contains('soundSelect')) {
            AmbientSound.rainButton.classList.toggle('soundSelect')
            AmbientSound.bgRain.pause()
            AmbientSound.rainButton.classList.remove('select')

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()

            AmbientSound.bgRain.loop = true
            AmbientSound.bgRain.play()
            AmbientSound.rainButton.classList.toggle('soundSelect')
            AmbientSound.rainButton.classList.add('select')

        }
    },
    soundOfStore() {
        if(AmbientSound.storeButton.classList.contains('soundSelect')) {
            AmbientSound.storeButton.classList.toggle('soundSelect')
            AmbientSound.bgStore.pause()
            AmbientSound.storeButton.classList.remove('select')

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()

            AmbientSound.bgStore.loop = true
            AmbientSound.bgStore.play()
            AmbientSound.storeButton.classList.toggle('soundSelect')
            AmbientSound.storeButton.classList.add('select')

        }
    },
    soundOfFire() {
        if(AmbientSound.campButton.classList.contains('soundSelect')) {
            AmbientSound.campButton.classList.toggle('soundSelect')
            AmbientSound.bgFire.pause()
            AmbientSound.campButton.classList.remove('select')

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()

            AmbientSound.bgFire.loop = true
            AmbientSound.bgFire.play()
            AmbientSound.campButton.classList.toggle('soundSelect')
            AmbientSound.campButton.classList.add('select')

        }
    },

    timerEnd() {
        AmbientSound.kitchenTimer.play()
    },
}

TimerControls.play.addEventListener('click', TimerControls.playTimer)
TimerControls.stop.addEventListener('click', TimerControls.stopTimer)
TimerControls.plus.addEventListener('click', TimerControls.plusFive)
TimerControls.minus.addEventListener('click', TimerControls.minusFive)

AmbientSound.forestButton.addEventListener('click', AmbientSound.soundOfNature)
AmbientSound.rainButton.addEventListener('click', AmbientSound.soundOfRain)
AmbientSound.storeButton.addEventListener('click', AmbientSound.soundOfStore)
AmbientSound.campButton.addEventListener('click', AmbientSound.soundOfFire)

function checkActivebgSounds() {
    if(AmbientSound.rainButton.classList.contains('soundSelect')) {
        AmbientSound.rainButton.classList.toggle('soundSelect')
        AmbientSound.rainButton.classList.remove('select')

    } if(AmbientSound.storeButton.classList.contains('soundSelect')) {
        AmbientSound.storeButton.classList.toggle('soundSelect')
        AmbientSound.storeButton.classList.remove('select')

    } if(AmbientSound.campButton.classList.contains('soundSelect')) {
        AmbientSound.campButton.classList.toggle('soundSelect')
        AmbientSound.campButton.classList.remove('select')

    } if(AmbientSound.forestButton.classList.toggle('soundSelect')) {
        AmbientSound.forestButton.classList.toggle('soundSelect')
        AmbientSound.forestButton.classList.remove('select')

    }
}

function pauseAllbgSounds() {
    AmbientSound.bgforest.pause()
    AmbientSound.bgRain.pause()
    AmbientSound.bgStore.pause()
    AmbientSound.bgFire.pause()
}
