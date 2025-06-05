export async function fetchAlbumsFromSpotify(artistName) {
  async function getSpotifyAccessToken() {
    const res = await fetch("http://localhost:3001/api/token");
    const data = await res.json();
    return data.access_token;
  }

  const accessToken = await getSpotifyAccessToken();

  const artistSearchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    artistName
  )}&type=artist&limit=1`;

  const artistRes = await fetch(artistSearchUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const artistData = await artistRes.json();
  if (!artistData.artists.items.length) {
    throw new Error("No artist found.");
  }

  const artistId = artistData.artists.items[0].id;
  const albumsUrl = `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`;

  const albumRes = await fetch(albumsUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const albumData = await albumRes.json();
  if (!albumData.items.length) {
    throw new Error("No albums found for this artist.");
  }

  const seen = new Set();
  const uniqueAlbums = albumData.items.filter((album) => {
    if (seen.has(album.name)) return false;
    seen.add(album.name);
    return true;
  });

  return uniqueAlbums
    .map((album) => ({
      albumName: album.name,
      artistName: album.artists[0].name,
      coverUrl: album.images[0]?.url || "",
      releaseDate: album.release_date,
      id: album.id,
      rating: Math.floor(Math.random() * 5) + 1,
    }))
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

export async function fetchAlbumDetails(albumId) {
  const res = await fetch("http://localhost:3001/api/token");
  const { access_token } = await res.json();

  const albumUrl = `https://api.spotify.com/v1/albums/${albumId}`;
  const albumRes = await fetch(albumUrl, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!albumRes.ok) {
    throw new Error("Failed to fetch album details");
  }

  const albumData = await albumRes.json();

  return {
    coverUrl: albumData.images[0]?.url || "",
    albumName: albumData.name,
    artistName: albumData.artists[0].name,
    releaseDate: albumData.release_date,
    tracks: albumData.tracks.items.map((track) => track.name),
    id: albumData.id,
    rating: Math.floor(Math.random() * 5) + 1, // Optional: temporary rating
  };
}

function showLoader() {
  const container = document.querySelector(".album-container");
  container.innerHTML = '<div class="loader"></div>';
}

function hideLoader() {
  // The loader will be removed when renderAlbums is called
}

export async function fetchAlbumByNameAndArtist(albumName, artistName) {
  const res = await fetch("http://localhost:3001/api/token");
  const { access_token } = await res.json();
  console.log("TOKEN: ", access_token);

  const query = `album:${albumName} artist:${artistName}`;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
    query
  )}&type=album&limit=1`;

  const searchRes = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const searchData = await searchRes.json();
  const album = searchData.albums.items[0];

  if (!album) throw new Error("Album not found");

  // Now fetch full album details (including tracklist)
  const albumDetailsRes = await fetch(
    `https://api.spotify.com/v1/albums/${album.id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  const albumDetails = await albumDetailsRes.json();

  return {
    coverUrl: albumDetails.images[0]?.url || "",
    albumName: albumDetails.name,
    artistName: albumDetails.artists[0].name,
    releaseDate: albumDetails.release_date,
    tracks: albumDetails.tracks.items.map((track) => track.name),
    id: albumDetails.id,
    rating: Math.floor(Math.random() * 5) + 1, //! TEMPORARY
  };
}
