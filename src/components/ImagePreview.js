import React from "react";
import IconButton from "./IconButton";
import "./imagepreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imagecontainer">
      <IconButton
        onClick={() => {
          let favorites = null;
          try {
            favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          } catch (error) {
            // Parsing JSON might fail if local storage is empty
            console.error(error);
            favorites = [];
          }
          if (favorites.includes(id)) {
            // Already added to favorites
            return;
          }
          const newFavorites = [...favorites, id];
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }}
      >
        ❤️
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
