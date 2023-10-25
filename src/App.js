import BookList from "./components/ListBooks";
import Navbar from "./components/Navbar";
import ListFavorites from "./components/ListFavorites";
import dataBook from "./data/books";
import "./App.css";

import { useState } from "react";

function App() {
  const [bookList, setBookList] = useState(dataBook);
  const [ListFavoriteBooks, setListFavoriteBooks] = useState([]);
  const [notification, setNotification] = useState("");

  function addBookToFavorite(element) {
    // Verificar si el elemento ya está en la lista de favoritos
    if (ListFavoriteBooks.find((book) => book.id === element.id)) {
      console.log("El libro ya está en favoritos.");
      setNotification("El libro ya está en favoritos.");
      return;
    }

    // Si no está en la lista, agrégalo a la lista de favoritos
    let tempBookList = [...ListFavoriteBooks];
    tempBookList.push(element);
    setListFavoriteBooks(tempBookList);
    setNotification("Libro agregado a favoritos.");
  }

  function removeBookFromFavorites(element) {
    const updatedFavorites = ListFavoriteBooks.filter(
      (book) => book.id !== element.id
    );
    setListFavoriteBooks(updatedFavorites);
  }

  return (
    <div className="App">
      <Navbar />
      {notification && (
        <div className="alert alert-info">
          {notification}
          <button
            onClick={() => setNotification("")}
            className="btn btn-link btn-sm"
          >
            Cerrar
          </button>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <BookList elements={bookList} fnAddFavorites={addBookToFavorite} />
          </div>
          <div className="col-md-3">
            <ListFavorites
              elements={ListFavoriteBooks}
              fnRemoveBookFromFavorites={removeBookFromFavorites}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
