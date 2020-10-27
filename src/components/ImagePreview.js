import React from "react";
import "./imagepreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <div className="imagecontainer">
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
