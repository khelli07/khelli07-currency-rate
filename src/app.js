import 'regenerator-runtime'
import './styles/style.css'
import './script/component/appbar.js'
import './script/component/search-home.js'
import './script/component/search-pair.js'
import mainHome from './script/view/main-home.js'
import mainPair from './script/view/main-pair.js'

document.addEventListener('DOMContentLoaded', mainHome)
document.addEventListener('DOMContentLoaded', mainPair)
