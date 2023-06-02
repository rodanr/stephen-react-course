/* eslint-disable react/prop-types */
import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => onDelete(book.id);

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div className="book-show">
      {showEdit ? (
        <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} />
      ) : (
        book.title
      )}
      <div className="actions">
        <div className="edit" onClick={handleEditClick}>
          Edit
        </div>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
