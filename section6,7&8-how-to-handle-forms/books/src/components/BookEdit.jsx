/* eslint-disable react/prop-types */
import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";

const BookEdit = ({ book, onSubmit }) => {
  const { editBookById } = useBooksContext();
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="buton is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
