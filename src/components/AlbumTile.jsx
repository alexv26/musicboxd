import "./component_styles/AlbumTile.css";

function AlbumTile({ coverUrl, albumName, artistName, rating }) {
  return (
    <div className="album-tile card text-light bg-dark">
      <img src={coverUrl} className="card-img-top" alt={`${albumName} cover`} />
      <div className="card-body">
        <h5 className="card-title">{albumName}</h5>
        <p className="card-text">{artistName}</p>
        <div className="star-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < rating ? "text-warning" : "text-secondary"}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AlbumTile;
