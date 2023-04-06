import { TimerControls, EventTimerControls } from "./timerControls.js"
import { Timer } from "./timer.js"
import { AmbientSound, EventAmbientSounds } from "./ambientSounds.js"


const lightButton = document.querySelector('.light')
const darkButton = document.querySelector('.dark')
const bgDarkMode = document.querySelector('body')
const timerTCDarkMode = document.querySelector('.timer')
const playLightMode = document.querySelector('button.play svg')
const stopLightMode = document.querySelector('button.stop svg')
const plusLightMode = document.querySelector('button.plus svg')
const minusLightMode = document.querySelector('button.minus svg')
const playDarkMode = document.querySelector('button.play svg.dark-button')
const stopDarkMode = document.querySelector('button.stop svg.dark-button')
const plusDarkMode = document.querySelector('button.plus svg.dark-button')
const minusDarkMode = document.querySelector('button.minus svg.dark-button')
const bgLMPlayButtons = document.querySelector('button.play')
const bgLMStopButtons = document.querySelector('button.stop')
const bgLMPlusButtons = document.querySelector('button.plus')
const bgLMMinusButtons = document.querySelector('button.minus')
const forestButton = document.querySelector('button.forest svg')
const rainButton = document.querySelector('button.rain svg')
const storeButton = document.querySelector('button.store svg')
const campButton = document.querySelector('button.camp svg')
const forestButtonbgDM = document.querySelector('button.forest')
const rainButtonbgDM = document.querySelector('button.rain')
const storeButtonbgDM = document.querySelector('button.store')
const campButtonbgDM = document.querySelector('button.camp')
const forestDM = document.querySelector('.sounds-wrapper button .forest-darkMode')
const rainDM = document.querySelector('.sounds-wrapper button .rain-darkMode')
const storeDM = document.querySelector('.sounds-wrapper button .store-darkMode')
const campDM = document.querySelector('.sounds-wrapper button .camp-darkMode')

lightButton.addEventListener('click', darkMode)
darkButton.addEventListener('click', lightMode)

function darkMode() {
    toggleButtonsDisable()

}

function lightMode() {
    toggleButtonsDisable()

    

}

function toggleButtonsDisable() {
    darkButton.classList.toggle('disable')
    lightButton.classList.toggle('disable')

    bgDarkMode.classList.toggle('dark-mode')
    timerTCDarkMode.classList.toggle('dark-mode')


    playLightMode.classList.toggle('disable')
    stopLightMode.classList.toggle('disable')
    plusLightMode.classList.toggle('disable')
    minusLightMode.classList.toggle('disable')

    playDarkMode.classList.toggle('disable')
    stopDarkMode.classList.toggle('disable')
    plusDarkMode.classList.toggle('disable')
    minusDarkMode.classList.toggle('disable')

    bgLMPlayButtons.classList.toggle('dark-mode')
    bgLMStopButtons.classList.toggle('dark-mode')
    bgLMPlusButtons.classList.toggle('dark-mode')
    bgLMMinusButtons.classList.toggle('dark-mode')

    forestButton.classList.toggle('disable')
    rainButton.classList.toggle('disable')
    storeButton.classList.toggle('disable')
    campButton.classList.toggle('disable')

    forestDM.classList.toggle('disable')
    rainDM.classList.toggle('disable')
    storeDM.classList.toggle('disable')
    campDM.classList.toggle('disable')
 
    forestButtonbgDM.classList.toggle('dark-mode')
    rainButtonbgDM.classList.toggle('dark-mode')
    storeButtonbgDM.classList.toggle('dark-mode')
    campButtonbgDM.classList.toggle('dark-mode')

    AmbientSound.sliderVolForest.classList.toggle('dark-mode')
    AmbientSound.sliderVolRain.classList.toggle('dark-mode')
    AmbientSound.sliderVolStore.classList.toggle('dark-mode')
    AmbientSound.sliderVolCamp.classList.toggle('dark-mode')
}

