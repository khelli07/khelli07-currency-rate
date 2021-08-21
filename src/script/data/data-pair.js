class DataPair {
  static searchRate (base, pair, amount = 1) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/5d3b1044e3f728240d107895/pair/${base.toUpperCase()}/${pair.toUpperCase()}/${amount}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.result === 'success') {
          return Promise.resolve(responseJson)
        } else {
          return Promise.reject(
            `${base.toUpperCase()} or ${pair.toUpperCase()} is not found`
          )
        }
      })
  }
}

export default DataPair
