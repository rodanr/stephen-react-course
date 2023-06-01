/* eslint-disable react/prop-types */
export default function ImageShow({ image }) {
  const onImageClick = () => (window.location.href = image.urls.raw);

  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onImageClick}
      />
    </div>
  );
}
