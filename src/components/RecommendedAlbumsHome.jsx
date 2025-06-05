import { useEffect, useState } from "react";
import AlbumTile from "./AlbumTile";
import {
  fetchAlbumsFromSpotify,
  fetchAlbumDetails,
  fetchAlbumByNameAndArtist,
} from "../service/SpotifyService.cjs";

function Recommendations() {
  const [recommendedAlbums, setRecommendedAlbums] = useState([]);

  useEffect(() => {
    async function loadAlbums() {
      const albumQueries = [
        ["My Beautiful Dark Twisted Fantasy", "Kanye West"],
        ["To Pimp a Butterfly", "Kendrick Lamar"],
        ["Hurry Up Tomorrow", "The Weeknd"],
        ["Abbey Road", "The Beatles"],
        ["We Don't Trust You", "Future"],
      ];

      try {
        const albumPromises = albumQueries.map(([album, artist]) =>
          fetchAlbumByNameAndArtist(album, artist)
        );

        const albums = await Promise.all(albumPromises);
        setRecommendedAlbums(albums);
      } catch (err) {
        console.error("Error loading one or more albums:", err);
      }
    }

    loadAlbums();
  }, []);

  return (
    <div className="recommendations-section text-light text-center py-4">
      <h2>Recommended Albums</h2>
      <p className="mb-4">
        Based on your listening history and preferences, here are some albums we
        think you'll love.
      </p>
      <div className="album-grid d-flex flex-wrap justify-content-center">
        {recommendedAlbums.map((album, index) => (
          <AlbumTile key={album.id || index} album={album} />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
