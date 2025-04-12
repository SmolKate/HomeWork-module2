import SummerBackground from './assets/images/summer-bg.jpg';
import RainyBackground from './assets/images/rainy-bg.jpg';
import WinterBackground from './assets/images/winter-bg.jpg';
import SummerIcon from './assets/icons/sun.svg'
import RainyIcon from './assets/icons/cloud-rain.svg'
import WinterIcon from './assets/icons/cloud-snow.svg'
import SummerAudio from './assets/sounds/summer.mp3'
import RainyAudio from './assets/sounds/rain.mp3'
import WinterAudio from './assets/sounds/winter.mp3'

export default [
    {
        name: 'Summer',
        background: SummerBackground,
        icon: SummerIcon,
        audio: SummerAudio,
    },
    {
        name: 'Rainy',
        background: RainyBackground,
        icon: RainyIcon,
        audio: RainyAudio,
    },
    {
        name: 'Winter',
        background: WinterBackground,
        icon: WinterIcon,
        audio: WinterAudio,
    }
]