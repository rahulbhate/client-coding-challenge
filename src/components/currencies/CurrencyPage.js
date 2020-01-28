import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCurrencies } from "../../redux/actions/currencyActions";
import PropTypes from "prop-types";
import CurrencyList from "./CurrencyList";
const CurrencyPage = ({ currencies, loadCurrencies, ...props }) => {
  const HomeStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexBasis: "100%",
    flex: 1
  };
  useEffect(() => {
    if (currencies.length === 0) {
      loadCurrencies();
    }
  }, []);
  return (
    <div style={HomeStyle}>
      <CurrencyList currencies={currencies} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};
const mapDispatchToProps = {
  loadCurrencies
};
CurrencyPage.propTypes = {
  currencies: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
