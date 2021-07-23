import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './Store';
import Header from "./Containers/Header/Header";
import Home from "./Containers/Home/Home";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Provider store={Store}>
        <Header />
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Provider>
    );
  }
}

export default withRouter(App);
