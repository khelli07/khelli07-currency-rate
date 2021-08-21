import "../component/search-pair.js";
import "../component/card-pair.js";
import DataPair from "../data/data-pair";

const mainPair = function () {
  const searchElement = document.querySelector("search-pair");
  const cardElement = document.querySelector("card-pair");

  const onButtonSearchClicked = async () => {
    try {
      const results = await DataPair.searchRate(
        searchElement.value[0],
        searchElement.value[1],
        searchElement.value[2]
      );
      renderResult(results);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderResult = (results) => {
    cardElement.data = results;
    cardElement.amount = searchElement.value[2].toLocaleString();
  };

  const fallbackResult = (message) => {
    cardElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default mainPair;
