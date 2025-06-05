import "./component_styles/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      navigate(`/searchresults?artist=${encodeURIComponent(input)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="instruction-text">
        <h4>Enter an artist to search their album catalogue</h4>
      </div>

      <div className="search-wrapper">
        <div className="search-box dark">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search your artist of interest..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-primary search-button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
