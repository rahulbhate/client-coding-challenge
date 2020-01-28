import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import CurrencyPage from "./currencies/CurrencyPage";
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/currencies' component={CurrencyPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
