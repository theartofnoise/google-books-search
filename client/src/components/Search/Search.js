import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Results from "../Results/Results";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";
import axios from "axios";
require('dotenv').config();


const apiKey = process.env.API_KEY;
const search = "hello";
console.log(apiKey);


class Search extends Component {
  state = {
    books: [],
  };

  // Api call here function serch
  componentDidMount() {
    this.GoogleBooks(search, apiKey);
  }
  
  GoogleBooks = (term, apiKey) => {
    const queryURL =
    "https://www.googleapis.com/books/v1/volumes?q=" + term +"&key="+ apiKey;

    axios({
      method: "GET",
      url: queryURL
    }).then(function(response) {
      console.log(response);
      var books = response.data.items.map(book => {
        var newBook = {
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          authors: book.volumeInfo.authors,
          image: book.volumeInfo.imageLinks.smallThumbnail,
          link: book.volumeInfo.infoLink
        }
        return newBook;
      })
      return books
    }).then(books => {
      this.setState({
        books: [...books]
      })
    });
  }

  render() {
    return (
      <div className="Search">
        <Nav />
        <Title />
        <SearchBar />
        <Results books={this.state.books} />
      </div>
    );
  }
}

export default Search;
