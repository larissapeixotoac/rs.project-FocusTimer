const AmbientSound = {
    forestButton: document.querySelector('.forest'),
    rainButton: document.querySelector('.rain'),
    storeButton: document.querySelector('.store'),
    campButton: document.querySelector('.camp'),

    bgForest: new Audio('assets/Floresta.wav'),
    bgRain: new Audio('assets/Chuva.wav'),
    bgStore: new Audio('assets/Cafeteria.wav'),
    bgFire: new Audio('assets/Lareira.wav'),

    sliderVolForest: document.querySelector('.forest-slider'),
    sliderVolRain: document.querySelector('.rain-slider'),
    sliderVolStore: document.querySelector('.store-slider'),
    sliderVolCamp: document.querySelector('.camp-slider'),

    deselectCard(audio, button, slider) {
        audio.pause()
        button.classList.remove('select')
        button.classList.toggle('soundSelect')
        slider.classList.remove('select')
    },

    selectCard(button, slider) {
        button.classList.add('select')
        button.classList.toggle('soundSelect')
        slider.classList.add('select')
    },

    playLoopAudio(audio) {
        audio.loop = true
        audio.play()
        AmbientSound.changeVolume()

    },
    
    soundOfNature() {
        if(AmbientSound.forestButton.classList.contains('soundSelect')) {         
            AmbientSound.deselectCard(AmbientSound.bgForest, AmbientSound.forestButton, AmbientSound.sliderVolForest)   

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()
            
            AmbientSound.playLoopAudio(AmbientSound.bgForest)

            AmbientSound.selectCard(AmbientSound.forestButton, AmbientSound.sliderVolForest)
        }
    },
    soundOfRain() {
        if(AmbientSound.rainButton.classList.contains('soundSelect')) {
            AmbientSound.deselectCard(AmbientSound.bgRain, AmbientSound.rainButton, AmbientSound.sliderVolRain) 

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()

            AmbientSound.playLoopAudio(AmbientSound.bgRain)

            AmbientSound.selectCard(AmbientSound.rainButton, AmbientSound.sliderVolRain)
        }
    },
    soundOfStore() {
        if(AmbientSound.storeButton.classList.contains('soundSelect')) {
            AmbientSound.deselectCard(AmbientSound.bgStore, AmbientSound.storeButton, AmbientSound.sliderVolStore) 

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()

            AmbientSound.playLoopAudio(AmbientSound.bgStore)

            AmbientSound.selectCard(AmbientSound.storeButton, AmbientSound.sliderVolStore)
        }
    },
    soundOfFire() {
        if(AmbientSound.campButton.classList.contains('soundSelect')) {
            AmbientSound.deselectCard(AmbientSound.bgFire, AmbientSound.campButton, AmbientSound.sliderVolCamp) 

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()

            AmbientSound.playLoopAudio(AmbientSound.bgFire)

            AmbientSound.selectCard(AmbientSound.campButton, AmbientSound.sliderVolCamp)
        }
    }, 

    changeVolume() {
        AmbientSound.bgForest.volume = AmbientSound.sliderVolForest.value
        AmbientSound.bgRain.volume = AmbientSound.sliderVolRain.value
        AmbientSound.bgStore.volume = AmbientSound.sliderVolStore.value
        AmbientSound.bgFire.volume = AmbientSound.sliderVolCamp.value

    }    
}

const EventAmbientSounds = {
    forestPressButton: AmbientSound.forestButton.addEventListener('click', AmbientSound.soundOfNature),
    rainPressButton: AmbientSound.rainButton.addEventListener('click', AmbientSound.soundOfRain),
    storePressButton: AmbientSound.storeButton.addEventListener('click', AmbientSound.soundOfStore),
    firePressButton: AmbientSound.campButton.addEventListener('click', AmbientSound.soundOfFire),
    forestVolume: AmbientSound.sliderVolForest.addEventListener('change', AmbientSound.changeVolume),
    rainVolume: AmbientSound.sliderVolRain.addEventListener('change', AmbientSound.changeVolume),
    storeVolume: AmbientSound.sliderVolStore.addEventListener('change', AmbientSound.changeVolume),
    campVolume: AmbientSound.sliderVolCamp.addEventListener('change', AmbientSound.changeVolume),
    
}


function checkActivebgSounds() {
    if(AmbientSound.rainButton.classList.contains('soundSelect')) {
        AmbientSound.rainButton.classList.toggle('soundSelect')
        AmbientSound.rainButton.classList.remove('select')
        AmbientSound.sliderVolRain.classList.remove('select')

    } if(AmbientSound.storeButton.classList.contains('soundSelect')) {
        AmbientSound.storeButton.classList.toggle('soundSelect')
        AmbientSound.storeButton.classList.remove('select')
        AmbientSound.sliderVolStore.classList.remove('select')

    } if(AmbientSound.campButton.classList.contains('soundSelect')) {
        AmbientSound.campButton.classList.toggle('soundSelect')
        AmbientSound.campButton.classList.remove('select')
        AmbientSound.sliderVolCamp.classList.remove('select')

    } if(AmbientSound.forestButton.classList.contains('soundSelect')) {
        AmbientSound.forestButton.classList.toggle('soundSelect')
        AmbientSound.forestButton.classList.remove('select')
        AmbientSound.sliderVolForest.classList.remove('select')
    }
}

function pauseAllbgSounds() {
    AmbientSound.bgForest.pause()
    AmbientSound.bgRain.pause()
    AmbientSound.bgStore.pause()
    AmbientSound.bgFire.pause()
}



export { AmbientSound, EventAmbientSounds }