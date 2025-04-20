import data from './data'
import './index.scss'
import { IDataItem } from './types'

const rootElement = document.querySelector('#list') as HTMLUListElement
const containerElement = document.getElementById('container') as HTMLDivElement
const volumeInputElement = document.getElementById('volume') as HTMLInputElement
const soundElement = document.getElementById('audio') as HTMLAudioElement

const containerStyles = containerElement.style
containerStyles.backgroundImage = `url("${data[0].background}")`

let isPlayed = false
let playedSound = ''

function onClick(background: string, audio: string, name: string) {
    containerStyles.backgroundImage = `url("${background}")`
    const volume = volumeInputElement.value
    soundElement.volume = +volume

    if (playedSound === name) {
        isPlayed ? soundElement.pause() : soundElement.play()
        isPlayed = !isPlayed
    } else {
        playedSound = name
        soundElement.pause()
        soundElement.src = audio
        soundElement.play()
        isPlayed = true
    }
}

function renderItem({background, icon, audio, name}: IDataItem) {
    const myIcon = new Image()
    myIcon.src = icon;

    const element = document.createElement('div')
    element.appendChild(myIcon)

    const li = document.createElement('li')
    li.style.backgroundImage = `url("${background}")`
    li.appendChild(element)
    li.addEventListener('click', () => onClick(background, audio, name))
    rootElement.append(li)
}

data.forEach((item: IDataItem) => renderItem(item))

volumeInputElement.addEventListener('input', onRangeChange)

function onRangeChange(e: Event) {
    const target = e.target as HTMLInputElement
    soundElement.volume = +target.value
}
