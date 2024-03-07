import "./Header.scss";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={BrainflixLogo} alt="BrainFlix logo" />
      </div>
      <NavBar />
      {/* <nav className="navbar">
        <div className="navbar__search-container">
          <div className="navbar__search">
            <img className="navbar__search-image" src="" alt="" />
            <input
              className="navbar__search-text"
              type="text"
              placeholder="Search"
            />
          </div>
          <img className="navbar__userimage" src={UserImage} alt="" />
        </div>
        <div className="navbar__button-container">
          <img className="navbar__button-image" src="" alt="" />
          <img className="button__image" src="" alt="" />
          <p className="navbar__button-text"></p>
          <p className="button__text"></p>
        </div>
      </nav> */}
    </header>
  );
}

export default Header;
