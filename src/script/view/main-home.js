import '../component/appbar.js'
import '../component/search-home.js'
import '../component/card-all-container.js'
import DataHome from '../data/data-home'

const mainHome = function () {
  const searchElement = document.querySelector('search-home')
  const cardElement = document.querySelector('card-all-container')

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataHome.searchRate(searchElement.value)
      renderResult(results)
    } catch (error) {
      fallbackResult(error)
    }
  }

  const renderResult = (results) => {
    cardElement.currencies = results
  }

  const fallbackResult = (message) => {
    cardElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default mainHome
