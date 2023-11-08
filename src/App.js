import ListAnimes from "./components/ListAnimes";
import Navbar from "./components/Navbar";
import ListFavorites from "./components/ListFavorites";
import dataBook from "./data/Animes";
import "./App.css";

import { useState } from "react";

function App() {
  const [animeList, setAnimeList] = useState(dataBook);
  const [ListFavoriteAnimes, setListFavoriteAnimes] = useState([]);
  const [notification, setNotification] = useState("");

  function addAnimeToFavorite(element) {
    // Verificar si el elemento ya está en la lista de favoritos
    if (ListFavoriteAnimes.find((anime) => anime.id === element.id)) {
      console.log("El Anime ya está en favoritos.");
      setNotification("El Anime ya está en favoritos.");
      return;
    }

    // Si no está en la lista, agrégalo a la lista de favoritos
    let tempAnimeList = [...ListFavoriteAnimes];
    tempAnimeList.push(element);
    setListFavoriteAnimes(tempAnimeList);
    setNotification("Anime agregado a favoritos.");
  }

  function fnRemoveAnimeFromFavorites(element) {
    const updatedFavorites = ListFavoriteAnimes.filter(
      (anime) => anime.id !== element.id
    );
    setListFavoriteAnimes(updatedFavorites);
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
            Close
          </button>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <ListAnimes
              elements={animeList}
              fnAddFavorites={addAnimeToFavorite}
            />
          </div>
          <div className="col-md-3">
            <ListFavorites
              elements={ListFavoriteAnimes}
              fnRemoveAnimeFromFavorites={fnRemoveAnimeFromFavorites}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
