/* eslint-disable react/prop-types */
import ImageShow from "./ImageShow";
import "./ImageList.css";

export default function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));

  return <div className="image-list">{renderedImages}</div>;
}
