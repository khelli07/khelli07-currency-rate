class DataHome {
  static searchRate (code) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/5d3b1044e3f728240d107895/latest/${code.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.conversion_rates) {
          return Promise.resolve(responseJson.conversion_rates)
        } else {
          return Promise.reject(`${code.toUpperCase()} is not found`)
        }
      })
  }
}

export default DataHome
