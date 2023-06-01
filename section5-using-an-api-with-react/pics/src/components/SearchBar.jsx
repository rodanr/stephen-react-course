/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="searchInput">Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
