import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/currenciesData/";
console.log(baseUrl);
export function getCurrencies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
