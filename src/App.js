import "./App.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImage from "./components/FavoriteImage";

function App() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  console.log(favorites);
  const [randomImage, setRandomImage] = useState(null);
  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  const favoriteImages = favorites.map((favorite) =>
    FavoriteImage({ photoId: favorite })
  );
  console.log(favoriteImages);

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          id={randomImage.id}
        />
      )}
      {favoriteImages}
    </main>
  );
}

export default App;
