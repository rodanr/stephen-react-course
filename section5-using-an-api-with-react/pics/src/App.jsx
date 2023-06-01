import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => setImages(await searchImages(term));
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
