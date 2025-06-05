import TopNavbar from "../components/TopNavbar.jsx";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero";
import Reccomendations from "../components/RecommendedAlbumsHome";

function Home() {
  return (
    <div style={{ backgroundColor: "#212529", minHeight: "100vh" }}>
      <TopNavbar />
      <Hero />
      <SearchBar />
      <Reccomendations />
    </div>
  );
}

export default Home;
