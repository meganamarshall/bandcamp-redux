export default function getBookDetails(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  return fetch(url)
    .then(res => res.json())
    .then(book => {
      return book.items[0].volumeInfo;
    });
}
