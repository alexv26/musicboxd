import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import AlbumTile from "../components/AlbumTile";
import { fetchAlbumsFromSpotify } from "../service/SpotifyService.cjs";
import TopNavbar from "../components/TopNavbar.jsx";

function SearchResultsPage() {
  const location = useLocation();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const queryParams = new URLSearchParams(location.search);
  const artistName = queryParams.get("artist");

  useEffect(() => {
    async function searchAlbums() {
      if (!artistName) {
        setErrorMsg("No artist specified.");
        setLoading(false);
        return;
      }

      try {
        const results = await fetchAlbumsFromSpotify(artistName);
        setAlbums(results);
      } catch (error) {
        console.error(error);
        setErrorMsg("Failed to fetch albums.");
      } finally {
        setLoading(false);
      }
    }

    searchAlbums();
  }, [artistName]);

  return (
    <>
      <TopNavbar />
      <div
        style={{
          backgroundColor: "#212529",
          width: "100%",
        }}
      >
        <div
          className="container text-light py-5"
          style={{ minHeight: "100vh" }}
        >
          <h2 className="text-center mb-4 pt-5">
            Search Results for "{artistName}"
          </h2>

          {loading && <p className="text-center">Loading albums...</p>}

          {errorMsg && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMsg}
            </div>
          )}

          {!loading && !errorMsg && albums.length === 0 && (
            <p className="text-center">No albums found.</p>
          )}

          <div className="album-grid d-flex flex-wrap justify-content-center">
            {albums.map((album, index) => (
              <AlbumTile key={album.id || index} album={album} />
            ))}
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-secondary mb-4"
          style={{
            marginLeft: "40px",
            marginTop: "-40px",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}

export default SearchResultsPage;
