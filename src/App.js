import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "bulma/css/bulma.css";

import CourseSelectorPage from "./screens/CourseSelectorPage";
import ReceiptPage from "./screens/ReceiptPage";

class App extends Component {
  render() {
    return (
      <Router>
        <CourseSelectorPage path="/" />
        <ReceiptPage path="/receipt" />
      </Router>
    );
  }
}

export default App;
