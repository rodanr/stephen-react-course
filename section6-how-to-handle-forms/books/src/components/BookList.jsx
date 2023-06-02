/* eslint-disable react/prop-types */
import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} onDelete={onDelete} />
  ));

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
