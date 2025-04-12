import data from './data'
import './index.scss'

const root = document.querySelector('#list')

function renderItem({name, background, icon}, number) {
    const myIcon = new Image()
    myIcon.src = icon;

    const element = document.createElement('div')
    element.appendChild(myIcon)

    const li = document.createElement('li')
    li.style.backgroundImage = `url("${background}")`
    li.appendChild(element)

    root.append(li)
}

data.forEach((item, number) => renderItem(item, number))