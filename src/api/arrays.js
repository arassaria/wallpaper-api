export function without(array, value) {
  const newArray = array.filter((favorite) => favorite !== value);
  return newArray;
}
