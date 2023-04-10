import { AmbientSound, EventAmbientSounds } from "./ambientSounds.js"

const lightAndDarkModeChange = {
    lightButton: document.querySelector('.light'),
    darkButton: document.querySelector('.dark'),
    bgDarkMode: document.querySelector('body'),
    timerTCDarkMode: document.querySelector('.timer'),
    playLightMode: document.querySelector('button.play svg'),
    stopLightMode: document.querySelector('button.stop svg'),
    plusLightMode: document.querySelector('button.plus svg'),
    minusLightMode: document.querySelector('button.minus svg'),
    playDarkMode: document.querySelector('button.play svg.dark-button'),
    stopDarkMode: document.querySelector('button.stop svg.dark-button'),
    plusDarkMode: document.querySelector('button.plus svg.dark-button'),
    minusDarkMode: document.querySelector('button.minus svg.dark-button'),
    bgLMPlayButtons: document.querySelector('button.play'),
    bgLMStopButtons: document.querySelector('button.stop'),
    bgLMPlusButtons: document.querySelector('button.plus'),
    bgLMMinusButtons: document.querySelector('button.minus'),
    forestButton: document.querySelector('button.forest svg'),
    rainButton: document.querySelector('button.rain svg'),
    storeButton: document.querySelector('button.store svg'),
    campButton: document.querySelector('button.camp svg'),
    forestButtonbgDM: document.querySelector('button.forest'),
    rainButtonbgDM: document.querySelector('button.rain'),
    storeButtonbgDM: document.querySelector('button.store'),
    campButtonbgDM: document.querySelector('button.camp'),
    forestDM: document.querySelector('.sounds-wrapper button .forest-darkMode'),
    rainDM: document.querySelector('.sounds-wrapper button .rain-darkMode'),
    storeDM: document.querySelector('.sounds-wrapper button .store-darkMode'),
    campDM: document.querySelector('.sounds-wrapper button .camp-darkMode'),

    darkMode() {
        lightAndDarkModeChange.toggleButtonsDisable()
    
    },
    
    lightMode() {
        lightAndDarkModeChange.toggleButtonsDisable()    
    
    },
    
    toggleButtonsDisable() {
        lightAndDarkModeChange.darkButton.classList.toggle('disable')
        lightAndDarkModeChange.lightButton.classList.toggle('disable')
    
        lightAndDarkModeChange.bgDarkMode.classList.toggle('dark-mode')
        lightAndDarkModeChange.timerTCDarkMode.classList.toggle('dark-mode')
    
        lightAndDarkModeChange.playLightMode.classList.toggle('disable')
        lightAndDarkModeChange.stopLightMode.classList.toggle('disable')
        lightAndDarkModeChange.plusLightMode.classList.toggle('disable')
        lightAndDarkModeChange.minusLightMode.classList.toggle('disable')
    
        lightAndDarkModeChange.playDarkMode.classList.toggle('disable')
        lightAndDarkModeChange.stopDarkMode.classList.toggle('disable')
        lightAndDarkModeChange.plusDarkMode.classList.toggle('disable')
        lightAndDarkModeChange.minusDarkMode.classList.toggle('disable')
    
        lightAndDarkModeChange.bgLMPlayButtons.classList.toggle('dark-mode')
        lightAndDarkModeChange.bgLMStopButtons.classList.toggle('dark-mode')
        lightAndDarkModeChange.bgLMPlusButtons.classList.toggle('dark-mode')
        lightAndDarkModeChange.bgLMMinusButtons.classList.toggle('dark-mode')
    
        lightAndDarkModeChange.forestButton.classList.toggle('disable')
        lightAndDarkModeChange.rainButton.classList.toggle('disable')
        lightAndDarkModeChange.storeButton.classList.toggle('disable')
        lightAndDarkModeChange.campButton.classList.toggle('disable')
    
        lightAndDarkModeChange.forestDM.classList.toggle('disable')
        lightAndDarkModeChange.rainDM.classList.toggle('disable')
        lightAndDarkModeChange.storeDM.classList.toggle('disable')
        lightAndDarkModeChange.campDM.classList.toggle('disable')
     
        lightAndDarkModeChange.forestButtonbgDM.classList.toggle('dark-mode')
        lightAndDarkModeChange.rainButtonbgDM.classList.toggle('dark-mode')
        lightAndDarkModeChange.storeButtonbgDM.classList.toggle('dark-mode')
        lightAndDarkModeChange.campButtonbgDM.classList.toggle('dark-mode')
    
        AmbientSound.sliderVolForest.classList.toggle('dark-mode')
        AmbientSound.sliderVolRain.classList.toggle('dark-mode')
        AmbientSound.sliderVolStore.classList.toggle('dark-mode')
        AmbientSound.sliderVolCamp.classList.toggle('dark-mode')
    }
    
}

const EventLightAndDarkModeChanges = {
    lightMode: lightAndDarkModeChange.lightButton.addEventListener('click', lightAndDarkModeChange.darkMode),
    darkMode: lightAndDarkModeChange.darkButton.addEventListener('click', lightAndDarkModeChange.lightMode)
}

export { lightAndDarkModeChange, EventLightAndDarkModeChanges }

