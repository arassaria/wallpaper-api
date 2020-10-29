import React from "react";
import { getFavorites } from "../api/storage";
import IconButton from "./IconButton";
import "./imagepreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imagecontainer">
      <IconButton
        onClick={() => {
          const favorites = getFavorites();
          if (favorites.includes(id)) {
            // Already added to favorites
            return;
          }
          const newFavorites = [...favorites, id];
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }}
      >
        🤍
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
