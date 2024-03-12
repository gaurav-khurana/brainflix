import "./Header.scss";
import BrainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={BrainflixLogo} alt="BrainFlix logo" />
        </Link>
      </div>

      <NavBar />
    </header>
  );
}

export default Header;
