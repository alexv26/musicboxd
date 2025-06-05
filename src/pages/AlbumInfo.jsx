import { useParams } from "react-router-dom";
function AlbumInfo() {
  const { albumName, artistName } = useParams();
  return (
    <a
      style={{
        paddingTop: "20px",
        fontSize: "30px",
      }}
      href="/"
    >
      {albumName} by {artistName}
    </a>
  );
}

export default AlbumInfo;
