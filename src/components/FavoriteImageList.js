import FavoriteImage from "./FavoriteImage";
import "./FavoriteImageList.css";

export default function FavoriteImageList({ photoIds }) {
  const favoriteImageListItem = photoIds.map((favorite) => (
    <li key={favorite} className="favorite-li">
      <FavoriteImage photoId={favorite} />
    </li>
  ));
  return <ul className="favorite-ul">{favoriteImageListItem}</ul>;
}
