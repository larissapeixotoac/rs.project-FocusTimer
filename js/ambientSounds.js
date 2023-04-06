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
    
    soundOfNature() {
        if(AmbientSound.forestButton.classList.contains('soundSelect')) {
            AmbientSound.forestButton.classList.toggle('soundSelect')
            AmbientSound.bgForest.pause()
            AmbientSound.forestButton.classList.remove('select')

        } else {
            checkActivebgSounds()
            pauseAllbgSounds()
            
            AmbientSound.bgForest.loop = true
            AmbientSound.bgForest.volume = AmbientSound.sliderVolForest.value
            AmbientSound.bgForest.play()

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
            AmbientSound.bgRain.volume = AmbientSound.sliderVolRain.value
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
            AmbientSound.bgStore.volume = AmbientSound.sliderVolStore.value
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
            AmbientSound.bgFire.volume = AmbientSound.sliderVolCamp.value
            AmbientSound.bgFire.play()
            AmbientSound.campButton.classList.toggle('soundSelect')
            AmbientSound.campButton.classList.add('select')

        }
    }, 
    
}

const EventAmbientSounds = {
    forestPressButton: AmbientSound.forestButton.addEventListener('click', AmbientSound.soundOfNature),
    rainPressButton: AmbientSound.rainButton.addEventListener('click', AmbientSound.soundOfRain),
    storePressButton: AmbientSound.storeButton.addEventListener('click', AmbientSound.soundOfStore),
    firePressButton: AmbientSound.campButton.addEventListener('click', AmbientSound.soundOfFire),
}

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
    AmbientSound.bgForest.pause()
    AmbientSound.bgRain.pause()
    AmbientSound.bgStore.pause()
    AmbientSound.bgFire.pause()
}

export { AmbientSound, EventAmbientSounds }