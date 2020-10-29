import React from "react";
import IconButton from "./IconButton";
import "./FavoriteImageList.css";

export default function FavoriteImage({ photoId }) {
  let currentFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return (
    <div>
      <img
        src={`https://source.unsplash.com/${photoId}`}
        alt="Favorite"
        className="favorite-image"
      />
      <IconButton
        onClick={() => {
          currentFavorites = currentFavorites.filter(
            (favorite) => favorite !== photoId
          );
          localStorage.setItem("favorites", JSON.stringify(currentFavorites));
        }}
        className="favorites__icon-button"
      >
        🗑
      </IconButton>
    </div>
  );
}
