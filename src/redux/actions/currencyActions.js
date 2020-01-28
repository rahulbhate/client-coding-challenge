import * as currencyApi from "../../api/currencyAPI";
function loadCurrenciesSuccess(currencies) {
  return { type: "LOAD_CURRENCY_SUCCESS", currencies };
}
/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */
export function loadCurrencies() {
  console.log("Load Currency Called");
  return function(dispatch) {
    return currencyApi
      .getCurrencies()
      .then(currencies => {
        dispatch(loadCurrenciesSuccess(currencies));
      })
      .catch(error => {
        throw error;
      });
  };
}
