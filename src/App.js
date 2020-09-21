import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import Nav from "./components/Nav";
import CourseSelector from "./components/CourseSelector";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <CourseSelector />
      </>
    );
  }
}

export default App;
