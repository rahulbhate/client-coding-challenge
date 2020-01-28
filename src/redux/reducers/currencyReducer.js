import initialState from "./initialState";
var moment = require("moment");
export default function currencyReducer(
  state = initialState.currencies,
  action
) {
  switch (action.type) {
    case "LOAD_CURRENCY_SUCCESS":
      return action.currencies.map(element => {
        var results = element.quotes.reduce(getQuotes, {});
        return { ...element, results };
      });
    default:
      return state;
  }
}

var getQuotes = function(accumulator, currentElement, currentIndex, array) {
  // Get the maximum by checking first if there is a maximum from the previous step
  const maximum = accumulator.maximum
    ? // If there is, then check if the current element is higher than the previous maximum
      accumulator.maximum < currentElement.price && currentElement.time > "1200"
      ? currentElement.price
      : accumulator.maximum
    : // If there isn't, use the current element right away
      currentElement.price;
  // Get the minimum by checking first if there is a minimum from the previous step
  const minimum = accumulator.minimum
    ? // If there is, then check if the current element is lower than the previous maximum
      accumulator.minimum > currentElement.price && currentElement.time < "1200"
      ? currentElement.price
      : accumulator.minimum
    : // If there isn't, use the current element right away
      currentElement.price;

  // Get the profit by calculating maximum price - minimum price (Buying Price - Selling Price)
  const profit = parseFloat(maximum) - parseFloat(minimum);
  const buyingTime =
    currentElement.price === accumulator.maximum
      ? currentElement.time
      : "KJdkfjd";
  const sellingTime =
    currentElement.price === minimum ? currentElement.time : "kjjkj";

  return {
    maximum,
    minimum,
    profit,
    buyingTime,
    sellingTime
  };
};
