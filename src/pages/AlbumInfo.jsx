import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAlbumDetails } from "../service/SpotifyService.cjs";
import TopNavbar from "../components/TopNavbar.jsx";

import "./pages_styles/AlbumInfo.css";

function AlbumInfo() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  function convertReleaseDate(releaseDate) {
    const [year, month, day] = releaseDate.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthIndex = parseInt(month, 10) - 1; // convert "01" to 0-based index
    const monthName = months[monthIndex];

    // Remove leading zero from day if present
    const dayNumber = parseInt(day, 10);

    return `${monthName} ${dayNumber}, ${year}`;
  }

  useEffect(() => {
    async function loadAlbum() {
      try {
        const albumData = await fetchAlbumDetails(albumId);
        setAlbum(albumData);
      } catch (err) {
        console.error("Failed to fetch album details:", err);
        setErrorMsg("Album not found.");
      } finally {
        setLoading(false);
      }
    }

    loadAlbum();
  }, [albumId]);

  if (loading)
    return <p className="text-center text-light">Loading album info...</p>;
  if (errorMsg) return <p className="text-center text-danger">{errorMsg}</p>;

  return (
    <>
      <TopNavbar />
      <div
        id="content"
        className="bg-dark"
        style={{
          marginTop: "80px",
        }}
      >
        <div
          id="album-info-section"
          className=""
          style={{
            padding: "20px",
            backgroundColor: "#121212",
            borderRadius: "8px",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "20px",
            maxWidth: "1100px", // Constrain the width of the whole block,
          }}
        >
          <img
            src={album.coverUrl}
            alt={`${album.albumName} cover`}
            className="img-fluid mb-4"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "8px",
              //marginLeft: "15%",
            }}
          />
          <div id="header-section" className="text-light">
            <h1 style={{ fontSize: "50px" }}>{album.albumName}</h1>
            <h1 style={{ fontSize: "30px" }}>{album.artistName}</h1>
            <h1 style={{ fontSize: "20px" }}>
              {convertReleaseDate(album.releaseDate)}
            </h1>
            <h1 style={{ fontSize: "20px" }}>{album.tracks.length} tracks</h1>
          </div>
        </div>
        <div
          id="tracklist-section"
          style={{
            padding: "20px",
            backgroundColor: "#121212",
            marginTop: "20px",
            borderRadius: "8px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1100px",
          }}
        >
          <h2 className="text-light">Tracklist:</h2>
          <div
            id="tracklist-scroll"
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              paddingRight: "10px",
              paddingLeft: "5px",
            }}
          >
            <ol className="text-start text-light" style={{ marginBottom: 0 }}>
              {album.tracks.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumInfo;
