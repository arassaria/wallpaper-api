import "./App.css";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";

function App() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  console.log(favorites);
  const [randomImage, setRandomImage] = useState(null);
  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button className="button" onClick={() => handleClick()}>
        Get Random Image
      </button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
          id={randomImage.id}
        />
      )}
      <FavoriteImageList photoIds={favorites} />
    </main>
  );
}

export default App;
