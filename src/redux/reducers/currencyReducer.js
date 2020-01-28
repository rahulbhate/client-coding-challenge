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
  const maximum = accumulator.maximum
    ? accumulator.maximum < currentElement.price && currentElement.time > "1200"
      ? currentElement.price
      : accumulator.maximum
    : currentElement.price;

  const time = accumulator.time
    ? accumulator.time === maximum
      ? currentElement.time
      : accumulator.time
    : currentElement.time;

  const minimum = accumulator.minimum
    ? accumulator.minimum > currentElement.price && currentElement.time < "1200"
      ? currentElement.price
      : accumulator.minimum
    : currentElement.price;

  const tt = accumulator.times
    ? accumulator.times === minimum
      ? currentElement.time
      : accumulator.times
    : currentElement.time;

  const profit = parseFloat(maximum) - parseFloat(minimum);

  return {
    maximum,
    minimum,
    profit,
    time,
    tt
  };
};
