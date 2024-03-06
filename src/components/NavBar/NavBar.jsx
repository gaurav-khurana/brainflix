import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <SearchBar />
      {/* <div className="navbar__search-container">
        <div className="navbar__search">
          <img className="navbar__search-image" src="" alt="" />
          <input
            className="navbar__search-text"
            type="text"
            placeholder="Search"
          />
        </div>
        <img className="navbar__userimage" src={UserImage} alt="" />
      </div> */}

      {/* <div className="navbar__button-container">
        <img className="navbar__button-image" src="" alt="" />
        <img className="button__image" src="" alt="" />
        <p className="navbar__button-text"></p>
        <p className="button__text"></p>
      </div> */}
    </nav>
  );
}
export default NavBar;
