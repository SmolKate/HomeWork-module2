import data from './data'
import './index.scss'

const root = document.querySelector('#list')

function renderItem(item, number) {
    const li = document.createElement('li')
    li.textContent = `${item} ${number}`
    root.append(li)
}

data.forEach((item, number) => renderItem(item, number))