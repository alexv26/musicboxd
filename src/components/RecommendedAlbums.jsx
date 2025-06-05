import AlbumTile from "./AlbumTile";

const recommendedAlbums = [
  {
    coverUrl:
      "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
    albumName: "My Beautiful Dark Twisted Fantasy",
    artistName: "Kanye West",
    rating: 5,
  },
  {
    coverUrl:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/11/1426099817173/f1efb3f4-9a6d-4f78-8ca8-594ab646d198-bestSizeAvailable.jpeg?width=465&dpr=1&s=none&crop=none",
    albumName: "To Pimp a Butterfly",
    artistName: "Kendrick Lamar",
    rating: 5,
  },
  {
    coverUrl:
      "https://m.media-amazon.com/images/I/715D1PP25iL._UF1000,1000_QL80_.jpg",
    albumName: "Hurry Up Tomorrow",
    artistName: "The Weeknd",
    rating: 5,
  },
  {
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
    albumName: "Abbey Road",
    artistName: "The Beatles",
    rating: 1,
  },
  {
    coverUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/15/Childish_Gambino_-_Bando_Stone_%26_the_New_World.png",
    albumName: "Bando Stone and The New World",
    artistName: "Childish Gambino",
    rating: 3,
  },
];

function Recommendations() {
  return (
    <div className="recommendations-section text-light text-center py-4">
      <h2>Recommended Albums</h2>
      <p className="mb-4">
        Based on your listening history and preferences, here are some albums we
        think you'll love.
      </p>
      <div className="album-grid d-flex flex-wrap justify-content-center">
        {recommendedAlbums.map((album, index) => (
          <AlbumTile
            key={index}
            coverUrl={album.coverUrl}
            albumName={album.albumName}
            artistName={album.artistName}
            rating={album.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
