class RandomStockValues {

  constructor() {

  }

  getAppleStockValues() {
    return this._getStocksValues(230, 350);
  }

  getGoogleStockValues() {
    return this._getStocksValues(320, 450);
  }

  getMicrosoftStockValues() {
    return this._getStocksValues(130, 220);
  }

  _getStocksValues(startValue, endValue) {
    return Math.floor(Math.random() * (startValue - endValue) + 1) + endValue;
  }

}

module.exports = new RandomStockValues();
