export function getFavorites() {
  let favorites = null;
  try {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  } catch (error) {
    // Parsing JSON might fail if local storage is empty
    console.error(error);
    favorites = [];
  }
  return favorites;
}
