import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Input from "../Input/Input";
import Spinner from "../common/Spinner";
var moment = require("moment");

const CurrencyList = ({ currencies }) => {
  const [search, setSearch] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
    console.log(search);
  }
  let filteredCurrencies = currencies.filter(currency => {
    let filterString = currency.currency.toLowerCase();
    return filterString.indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <>
      <div style={{}}>
        <Input
          type={"text"}
          placeholder={"Search by Currency Name...."}
          onChange={handleChange}
        />
      </div>
      {currencies.length > 0 ? (
        filteredCurrencies.map((currency, index) => {
          return (
            <div key={currency.currency}>
              <Card>
                <h6>{moment(currency.date).format(" DD -MMMM - YY")}</h6>
                <h6>{currency.currency}</h6>
                <h6>Buy || Sell</h6>
                <h6>
                  ${currency.results.minimum} || ${currency.results.maximum}
                </h6>
                <h6>
                  {currency.results.buyingTime} ||
                  {currency.results.sellingTime}
                </h6>
                <h6>
                  Profit:$
                  {currency.results.profit.toFixed(2)}
                </h6>
              </Card>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </>
  );
};

CurrencyList.propTypes = {
  currencies: PropTypes.array.isRequired
};

export default CurrencyList;
