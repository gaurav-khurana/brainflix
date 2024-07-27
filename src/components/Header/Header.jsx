import "./Header.scss";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import YoutubeCloneLogo from "../../assets/logo/youtube.svg";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={YoutubeCloneLogo} alt="BrainFlix logo" />
        </Link>
      </div>

      <NavBar />
    </header>
  );
}

export default Header;
