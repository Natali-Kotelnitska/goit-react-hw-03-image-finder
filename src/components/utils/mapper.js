export default function mapper(array) {
  // console.log(array);
  return array.map(({ id, webformatURL, largeImageURL, tags }) => ({
    webformatURL,
    largeImageURL,
    id,
    tags,
  }));
}
