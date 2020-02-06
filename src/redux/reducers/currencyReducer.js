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
        return { ...state, ...element, ...results };
      });
    default:
      return state;
  }
}

const getQuotes = function(all, item) {
  const maximumSellingPrice = all.maximumSellingPrice
    ? all.maximumSellingPrice < item.price && item.time > "1200"
      ? item.price
      : all.maximumSellingPrice
    : item.price;

  const minimumBuyingPrice = all.minimumBuyingPrice
    ? all.minimumBuyingPrice > item.price && item.time < "1200"
      ? item.price
      : all.minimumBuyingPrice
    : item.price;

  const buyingTime = all.buyingTime
    ? item.price === maximumSellingPrice
      ? item.time
      : all.buyingTime
    : item.time;

  const sellingTime = all.sellingTime
    ? item.price === minimumBuyingPrice
      ? item.time
      : all.sellingTime
    : item.time;

  const profit =
    parseFloat(maximumSellingPrice) - parseFloat(minimumBuyingPrice);
  return {
    maximumSellingPrice,
    minimumBuyingPrice,
    buyingTime,
    sellingTime,
    profit
  };
};
