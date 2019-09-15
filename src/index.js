import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Details from "./components/Details";
import List from "./components/List";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Search />
      
        <Switch>
          <Route  exact path="/" component={List} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
