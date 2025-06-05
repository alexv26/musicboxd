import "./component_styles/SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <>
      <div className="instruction-text">
        <h4>Enter an artist to search their album catalogue</h4>
      </div>

      <div className="search-wrapper">
        <div className="search-box dark">
          {/* Use the FontAwesomeIcon component here */}
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search your artist of interest..."
          />
          <button className="btn btn-primary search-button">Search</button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
