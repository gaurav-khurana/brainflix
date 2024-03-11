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
    </header>
  );
}

export default Header;
