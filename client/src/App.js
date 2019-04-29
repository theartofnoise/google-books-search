import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search"
import Saved from "./components/Saved/Saved"


class App extends Component {



  render() {
    return (
      <div className="App">
        <Search />
        <Saved />
      </div>
    );
  }
}

export default App;
