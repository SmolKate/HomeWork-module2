import data from './data'
import './index.scss'

const root = document.querySelector('#list')
document.getElementById('container').style.backgroundImage = `url("${data[0].background}")`

function onClick(background) {
    document.getElementById('container').style.backgroundImage = `url("${background}")`
}

function renderItem({background, icon}) {
    const myIcon = new Image()
    myIcon.src = icon;

    const element = document.createElement('div')
    element.appendChild(myIcon)

    const li = document.createElement('li')
    li.style.backgroundImage = `url("${background}")`
    li.appendChild(element)

    li.addEventListener('click', () => onClick(background))

    root.append(li)
}

data.forEach((item, number) => renderItem(item, number))