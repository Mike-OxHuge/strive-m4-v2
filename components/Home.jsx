import { useState, useEffect, useCallback } from "react";
import books from "../pages/api/books.json";
import BookList from "./BookList";

const Homepage = () => {
  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default Homepage;
