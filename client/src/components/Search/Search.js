import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Results from "../Results/Results";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";

class Search extends Component {



  render() {
    return (
      <div className="Search">
        <Nav />
        <Title />
        <SearchBar />
        <Results />
      </div>
    );
  }
}

export default Search;