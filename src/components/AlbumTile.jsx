import "./component_styles/AlbumTile.css";
import { Link } from "react-router-dom";

function AlbumTile({ album }) {
  const { coverUrl, albumName, artistName, rating, id } = album;
  return (
    <div
      className="album-tile card text-light"
      style={{ backgroundColor: "#121212" }}
    >
      <Link
        to={`/album/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img
          src={coverUrl}
          className="card-img-top"
          alt={`${albumName} cover`}
        />
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
      </Link>
    </div>
  );
}

export default AlbumTile;
