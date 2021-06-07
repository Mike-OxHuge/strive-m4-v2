import { Component } from "react";
import books from "../pages/api/books.json";
import BookList from "./BookList";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <BookList books={books} />
      </div>
    );
  }
}

export default Homepage;
