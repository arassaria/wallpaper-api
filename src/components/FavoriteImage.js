import React from "react";

export default function FavoriteImage({ photoId }) {
  return (
    <img
      src={`https://source.unsplash.com/${photoId}`}
      alt="Favorite"
      className="favorite-image"
    />
  );
}
