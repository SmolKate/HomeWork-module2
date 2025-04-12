import data from './data'
import './index.scss'

const root = document.querySelector('#list')
document.getElementById('container').style.backgroundImage = `url("${data[0].background}")`

let isPlayed = false
let playedSound = ''

function onClick(background, audio, name) {
    document.getElementById('container').style.backgroundImage = `url("${background}")`
    const sound = document.getElementById('audio')

    if (playedSound === name) {
        isPlayed ? sound.pause() : sound.play()
        isPlayed = !isPlayed
    } else {
        playedSound = name
        sound.pause()
        sound.src = audio
        sound.play()
        isPlayed = true
    }
}

function renderItem({background, icon, audio, name}) {
    const myIcon = new Image()
    myIcon.src = icon;

    const element = document.createElement('div')
    element.appendChild(myIcon)

    const li = document.createElement('li')
    li.style.backgroundImage = `url("${background}")`
    li.appendChild(element)

    li.addEventListener('click', () => onClick(background, audio, name))

    root.append(li)
}

data.forEach((item, number) => renderItem(item, number))