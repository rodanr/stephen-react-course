/* eslint-disable react/prop-types */
import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-book-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
