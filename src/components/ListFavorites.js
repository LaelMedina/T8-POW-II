import Favorite from "./Favorite";

function ListFavorites(props) {
  let listFavoritesRendered = props.elements.map((element) => {
    return (
      <Favorite
        key={element.id}
        value={element}
        fnRemoveAnimeFromFavorites={props.fnRemoveAnimeFromFavorites}
      />
    );
  });

  return (
    <div>
      <h4>List Favorites</h4>
      {listFavoritesRendered}
    </div>
  );
}

export default ListFavorites;
